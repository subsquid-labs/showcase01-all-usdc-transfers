import {assertNotNull} from '@subsquid/util-internal'
import {EvmBatchProcessor} from '@subsquid/evm-processor';
import {TypeormDatabase} from '@subsquid/typeorm-store'
import * as usdcAbi from './abi/usdc';
import {UsdcTransfer} from './model'

const USDC_CONTRACT_ADDRESS =
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

const processor = new EvmBatchProcessor()
  .setGateway('https://v2.archive.subsquid.io/network/ethereum-mainnet')
  // Chain RPC endpoint is required for
  //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
  //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
  .setRpcEndpoint('https://rpc.ankr.com/eth')
  .setFinalityConfirmation(75)
  .addLog({
    range: { from: 6_082_465 },
    address: [USDC_CONTRACT_ADDRESS],
    topic0: [usdcAbi.events.Transfer.topic],
  })
  .setFields({
    log: {
      transactionHash: true,
    },
  })

const db = new TypeormDatabase({supportHotBlocks: true})

processor.run(db, async (ctx) => {
  const transfers: UsdcTransfer[] = []
  for (let block of ctx.blocks) {
    for (let log of block.logs) {
      if (log.address === USDC_CONTRACT_ADDRESS && log.topics[0] === usdcAbi.events.Transfer.topic) {
        let {from, to, value} = usdcAbi.events.Transfer.decode(log)
        transfers.push(new UsdcTransfer({
          id: log.id,
          block: block.header.height,
          from,
          to,
          value,
          txnHash: log.transactionHash
        }))
      }
    }
  }
  await ctx.store.upsert(transfers)
})
