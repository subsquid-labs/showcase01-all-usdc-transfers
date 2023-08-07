import {TypeormDatabase} from '@subsquid/typeorm-store'
import {UsdcTransfer} from './model'
import {processor, USDC_CONTRACT_ADDRESS} from './processor'
import * as usdcAbi from './abi/usdc'

processor.run(new TypeormDatabase({supportHotBlocks: false}), async (ctx) => {
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
