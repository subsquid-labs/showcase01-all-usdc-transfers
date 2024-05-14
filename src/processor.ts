import { lookupArchive } from "@subsquid/archive-registry";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";
import * as usdcAbi from "./abi/usdc";

export const USDC_CONTRACT_ADDRESS =
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

export const processor = new EvmBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/ethereum-mainnet")
  // Chain RPC endpoint is required for
  //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
  //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
  .setRpcEndpoint({
    url: "https://rpc.ankr.com/eth",
    // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
    rateLimit: 10,
  })
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
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
