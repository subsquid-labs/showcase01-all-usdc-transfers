import { address, bool, bytes32, string, uint256, uint8 } from '@subsquid/evm-codec'
import { func } from '../abi.support.js'
import type { FunctionArguments, FunctionReturn } from '../abi.support.js'

/** CANCEL_AUTHORIZATION_TYPEHASH() */
export const CANCEL_AUTHORIZATION_TYPEHASH = func('0xd9169487', {}, bytes32)
export type CANCEL_AUTHORIZATION_TYPEHASHParams = FunctionArguments<typeof CANCEL_AUTHORIZATION_TYPEHASH>
export type CANCEL_AUTHORIZATION_TYPEHASHReturn = FunctionReturn<typeof CANCEL_AUTHORIZATION_TYPEHASH>

/** DOMAIN_SEPARATOR() */
export const DOMAIN_SEPARATOR = func('0x3644e515', {}, bytes32)
export type DOMAIN_SEPARATORParams = FunctionArguments<typeof DOMAIN_SEPARATOR>
export type DOMAIN_SEPARATORReturn = FunctionReturn<typeof DOMAIN_SEPARATOR>

/** PERMIT_TYPEHASH() */
export const PERMIT_TYPEHASH = func('0x30adf81f', {}, bytes32)
export type PERMIT_TYPEHASHParams = FunctionArguments<typeof PERMIT_TYPEHASH>
export type PERMIT_TYPEHASHReturn = FunctionReturn<typeof PERMIT_TYPEHASH>

/** RECEIVE_WITH_AUTHORIZATION_TYPEHASH() */
export const RECEIVE_WITH_AUTHORIZATION_TYPEHASH = func('0x7f2eecc3', {}, bytes32)
export type RECEIVE_WITH_AUTHORIZATION_TYPEHASHParams = FunctionArguments<typeof RECEIVE_WITH_AUTHORIZATION_TYPEHASH>
export type RECEIVE_WITH_AUTHORIZATION_TYPEHASHReturn = FunctionReturn<typeof RECEIVE_WITH_AUTHORIZATION_TYPEHASH>

/** TRANSFER_WITH_AUTHORIZATION_TYPEHASH() */
export const TRANSFER_WITH_AUTHORIZATION_TYPEHASH = func('0xa0cc6a68', {}, bytes32)
export type TRANSFER_WITH_AUTHORIZATION_TYPEHASHParams = FunctionArguments<typeof TRANSFER_WITH_AUTHORIZATION_TYPEHASH>
export type TRANSFER_WITH_AUTHORIZATION_TYPEHASHReturn = FunctionReturn<typeof TRANSFER_WITH_AUTHORIZATION_TYPEHASH>

/** allowance(address,address) */
export const allowance = func('0xdd62ed3e', {
    owner: address,
    spender: address,
}, uint256)
export type AllowanceParams = FunctionArguments<typeof allowance>
export type AllowanceReturn = FunctionReturn<typeof allowance>

/** approve(address,uint256) */
export const approve = func('0x095ea7b3', {
    spender: address,
    value: uint256,
}, bool)
export type ApproveParams = FunctionArguments<typeof approve>
export type ApproveReturn = FunctionReturn<typeof approve>

/** authorizationState(address,bytes32) */
export const authorizationState = func('0xe94a0102', {
    authorizer: address,
    nonce: bytes32,
}, bool)
export type AuthorizationStateParams = FunctionArguments<typeof authorizationState>
export type AuthorizationStateReturn = FunctionReturn<typeof authorizationState>

/** balanceOf(address) */
export const balanceOf = func('0x70a08231', {
    account: address,
}, uint256)
export type BalanceOfParams = FunctionArguments<typeof balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof balanceOf>

/** blacklist(address) */
export const blacklist = func('0xf9f92be4', {
    _account: address,
})
export type BlacklistParams = FunctionArguments<typeof blacklist>
export type BlacklistReturn = FunctionReturn<typeof blacklist>

/** blacklister() */
export const blacklister = func('0xbd102430', {}, address)
export type BlacklisterParams = FunctionArguments<typeof blacklister>
export type BlacklisterReturn = FunctionReturn<typeof blacklister>

/** burn(uint256) */
export const burn = func('0x42966c68', {
    _amount: uint256,
})
export type BurnParams = FunctionArguments<typeof burn>
export type BurnReturn = FunctionReturn<typeof burn>

/** cancelAuthorization(address,bytes32,uint8,bytes32,bytes32) */
export const cancelAuthorization = func('0x5a049a70', {
    authorizer: address,
    nonce: bytes32,
    v: uint8,
    r: bytes32,
    s: bytes32,
})
export type CancelAuthorizationParams = FunctionArguments<typeof cancelAuthorization>
export type CancelAuthorizationReturn = FunctionReturn<typeof cancelAuthorization>

/** configureMinter(address,uint256) */
export const configureMinter = func('0x4e44d956', {
    minter: address,
    minterAllowedAmount: uint256,
}, bool)
export type ConfigureMinterParams = FunctionArguments<typeof configureMinter>
export type ConfigureMinterReturn = FunctionReturn<typeof configureMinter>

/** currency() */
export const currency = func('0xe5a6b10f', {}, string)
export type CurrencyParams = FunctionArguments<typeof currency>
export type CurrencyReturn = FunctionReturn<typeof currency>

/** decimals() */
export const decimals = func('0x313ce567', {}, uint8)
export type DecimalsParams = FunctionArguments<typeof decimals>
export type DecimalsReturn = FunctionReturn<typeof decimals>

/** decreaseAllowance(address,uint256) */
export const decreaseAllowance = func('0xa457c2d7', {
    spender: address,
    decrement: uint256,
}, bool)
export type DecreaseAllowanceParams = FunctionArguments<typeof decreaseAllowance>
export type DecreaseAllowanceReturn = FunctionReturn<typeof decreaseAllowance>

/** increaseAllowance(address,uint256) */
export const increaseAllowance = func('0x39509351', {
    spender: address,
    increment: uint256,
}, bool)
export type IncreaseAllowanceParams = FunctionArguments<typeof increaseAllowance>
export type IncreaseAllowanceReturn = FunctionReturn<typeof increaseAllowance>

/** initialize(string,string,string,uint8,address,address,address,address) */
export const initialize = func('0x3357162b', {
    tokenName: string,
    tokenSymbol: string,
    tokenCurrency: string,
    tokenDecimals: uint8,
    newMasterMinter: address,
    newPauser: address,
    newBlacklister: address,
    newOwner: address,
})
export type InitializeParams = FunctionArguments<typeof initialize>
export type InitializeReturn = FunctionReturn<typeof initialize>

/** initializeV2(string) */
export const initializeV2 = func('0xd608ea64', {
    newName: string,
})
export type InitializeV2Params = FunctionArguments<typeof initializeV2>
export type InitializeV2Return = FunctionReturn<typeof initializeV2>

/** initializeV2_1(address) */
export const initializeV2_1 = func('0x2fc81e09', {
    lostAndFound: address,
})
export type InitializeV2_1Params = FunctionArguments<typeof initializeV2_1>
export type InitializeV2_1Return = FunctionReturn<typeof initializeV2_1>

/** isBlacklisted(address) */
export const isBlacklisted = func('0xfe575a87', {
    _account: address,
}, bool)
export type IsBlacklistedParams = FunctionArguments<typeof isBlacklisted>
export type IsBlacklistedReturn = FunctionReturn<typeof isBlacklisted>

/** isMinter(address) */
export const isMinter = func('0xaa271e1a', {
    account: address,
}, bool)
export type IsMinterParams = FunctionArguments<typeof isMinter>
export type IsMinterReturn = FunctionReturn<typeof isMinter>

/** masterMinter() */
export const masterMinter = func('0x35d99f35', {}, address)
export type MasterMinterParams = FunctionArguments<typeof masterMinter>
export type MasterMinterReturn = FunctionReturn<typeof masterMinter>

/** mint(address,uint256) */
export const mint = func('0x40c10f19', {
    _to: address,
    _amount: uint256,
}, bool)
export type MintParams = FunctionArguments<typeof mint>
export type MintReturn = FunctionReturn<typeof mint>

/** minterAllowance(address) */
export const minterAllowance = func('0x8a6db9c3', {
    minter: address,
}, uint256)
export type MinterAllowanceParams = FunctionArguments<typeof minterAllowance>
export type MinterAllowanceReturn = FunctionReturn<typeof minterAllowance>

/** name() */
export const name = func('0x06fdde03', {}, string)
export type NameParams = FunctionArguments<typeof name>
export type NameReturn = FunctionReturn<typeof name>

/** nonces(address) */
export const nonces = func('0x7ecebe00', {
    owner: address,
}, uint256)
export type NoncesParams = FunctionArguments<typeof nonces>
export type NoncesReturn = FunctionReturn<typeof nonces>

/** owner() */
export const owner = func('0x8da5cb5b', {}, address)
export type OwnerParams = FunctionArguments<typeof owner>
export type OwnerReturn = FunctionReturn<typeof owner>

/** pause() */
export const pause = func('0x8456cb59', {})
export type PauseParams = FunctionArguments<typeof pause>
export type PauseReturn = FunctionReturn<typeof pause>

/** paused() */
export const paused = func('0x5c975abb', {}, bool)
export type PausedParams = FunctionArguments<typeof paused>
export type PausedReturn = FunctionReturn<typeof paused>

/** pauser() */
export const pauser = func('0x9fd0506d', {}, address)
export type PauserParams = FunctionArguments<typeof pauser>
export type PauserReturn = FunctionReturn<typeof pauser>

/** permit(address,address,uint256,uint256,uint8,bytes32,bytes32) */
export const permit = func('0xd505accf', {
    owner: address,
    spender: address,
    value: uint256,
    deadline: uint256,
    v: uint8,
    r: bytes32,
    s: bytes32,
})
export type PermitParams = FunctionArguments<typeof permit>
export type PermitReturn = FunctionReturn<typeof permit>

/** receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32) */
export const receiveWithAuthorization = func('0xef55bec6', {
    from: address,
    to: address,
    value: uint256,
    validAfter: uint256,
    validBefore: uint256,
    nonce: bytes32,
    v: uint8,
    r: bytes32,
    s: bytes32,
})
export type ReceiveWithAuthorizationParams = FunctionArguments<typeof receiveWithAuthorization>
export type ReceiveWithAuthorizationReturn = FunctionReturn<typeof receiveWithAuthorization>

/** removeMinter(address) */
export const removeMinter = func('0x3092afd5', {
    minter: address,
}, bool)
export type RemoveMinterParams = FunctionArguments<typeof removeMinter>
export type RemoveMinterReturn = FunctionReturn<typeof removeMinter>

/** rescueERC20(address,address,uint256) */
export const rescueERC20 = func('0xb2118a8d', {
    tokenContract: address,
    to: address,
    amount: uint256,
})
export type RescueERC20Params = FunctionArguments<typeof rescueERC20>
export type RescueERC20Return = FunctionReturn<typeof rescueERC20>

/** rescuer() */
export const rescuer = func('0x38a63183', {}, address)
export type RescuerParams = FunctionArguments<typeof rescuer>
export type RescuerReturn = FunctionReturn<typeof rescuer>

/** symbol() */
export const symbol = func('0x95d89b41', {}, string)
export type SymbolParams = FunctionArguments<typeof symbol>
export type SymbolReturn = FunctionReturn<typeof symbol>

/** totalSupply() */
export const totalSupply = func('0x18160ddd', {}, uint256)
export type TotalSupplyParams = FunctionArguments<typeof totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof totalSupply>

/** transfer(address,uint256) */
export const transfer = func('0xa9059cbb', {
    to: address,
    value: uint256,
}, bool)
export type TransferParams = FunctionArguments<typeof transfer>
export type TransferReturn = FunctionReturn<typeof transfer>

/** transferFrom(address,address,uint256) */
export const transferFrom = func('0x23b872dd', {
    from: address,
    to: address,
    value: uint256,
}, bool)
export type TransferFromParams = FunctionArguments<typeof transferFrom>
export type TransferFromReturn = FunctionReturn<typeof transferFrom>

/** transferOwnership(address) */
export const transferOwnership = func('0xf2fde38b', {
    newOwner: address,
})
export type TransferOwnershipParams = FunctionArguments<typeof transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof transferOwnership>

/** transferWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32) */
export const transferWithAuthorization = func('0xe3ee160e', {
    from: address,
    to: address,
    value: uint256,
    validAfter: uint256,
    validBefore: uint256,
    nonce: bytes32,
    v: uint8,
    r: bytes32,
    s: bytes32,
})
export type TransferWithAuthorizationParams = FunctionArguments<typeof transferWithAuthorization>
export type TransferWithAuthorizationReturn = FunctionReturn<typeof transferWithAuthorization>

/** unBlacklist(address) */
export const unBlacklist = func('0x1a895266', {
    _account: address,
})
export type UnBlacklistParams = FunctionArguments<typeof unBlacklist>
export type UnBlacklistReturn = FunctionReturn<typeof unBlacklist>

/** unpause() */
export const unpause = func('0x3f4ba83a', {})
export type UnpauseParams = FunctionArguments<typeof unpause>
export type UnpauseReturn = FunctionReturn<typeof unpause>

/** updateBlacklister(address) */
export const updateBlacklister = func('0xad38bf22', {
    _newBlacklister: address,
})
export type UpdateBlacklisterParams = FunctionArguments<typeof updateBlacklister>
export type UpdateBlacklisterReturn = FunctionReturn<typeof updateBlacklister>

/** updateMasterMinter(address) */
export const updateMasterMinter = func('0xaa20e1e4', {
    _newMasterMinter: address,
})
export type UpdateMasterMinterParams = FunctionArguments<typeof updateMasterMinter>
export type UpdateMasterMinterReturn = FunctionReturn<typeof updateMasterMinter>

/** updatePauser(address) */
export const updatePauser = func('0x554bab3c', {
    _newPauser: address,
})
export type UpdatePauserParams = FunctionArguments<typeof updatePauser>
export type UpdatePauserReturn = FunctionReturn<typeof updatePauser>

/** updateRescuer(address) */
export const updateRescuer = func('0x2ab60045', {
    newRescuer: address,
})
export type UpdateRescuerParams = FunctionArguments<typeof updateRescuer>
export type UpdateRescuerReturn = FunctionReturn<typeof updateRescuer>

/** version() */
export const version = func('0x54fd4d50', {}, string)
export type VersionParams = FunctionArguments<typeof version>
export type VersionReturn = FunctionReturn<typeof version>
