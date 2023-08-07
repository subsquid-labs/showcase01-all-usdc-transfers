import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import * as usdcAbi from './abi/usdc'

export const USDC_CONTRACT_ADDRESS = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('eth-mainnet'),
    })
    .addLog({
        range: {from: 6_082_465},
        address: [USDC_CONTRACT_ADDRESS],
        topic0: [usdcAbi.events.Transfer.topic],
    })
    .setFields({
        log: {
            transactionHash: true,
        },
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
