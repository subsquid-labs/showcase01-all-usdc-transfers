import { address, bytes32, uint256 } from '@subsquid/evm-codec'
import { event, indexed } from '../abi.support.js'
import type { EventParams as EParams } from '../abi.support.js'

/** Approval(address,address,uint256) */
export const Approval = event('0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925', {
    owner: indexed(address),
    spender: indexed(address),
    value: uint256,
})
export type ApprovalEventArgs = EParams<typeof Approval>

/** AuthorizationCanceled(address,bytes32) */
export const AuthorizationCanceled = event('0x1cdd46ff242716cdaa72d159d339a485b3438398348d68f09d7c8c0a59353d81', {
    authorizer: indexed(address),
    nonce: indexed(bytes32),
})
export type AuthorizationCanceledEventArgs = EParams<typeof AuthorizationCanceled>

/** AuthorizationUsed(address,bytes32) */
export const AuthorizationUsed = event('0x98de503528ee59b575ef0c0a2576a82497bfc029a5685b209e9ec333479b10a5', {
    authorizer: indexed(address),
    nonce: indexed(bytes32),
})
export type AuthorizationUsedEventArgs = EParams<typeof AuthorizationUsed>

/** Blacklisted(address) */
export const Blacklisted = event('0xffa4e6181777692565cf28528fc88fd1516ea86b56da075235fa575af6a4b855', {
    _account: indexed(address),
})
export type BlacklistedEventArgs = EParams<typeof Blacklisted>

/** BlacklisterChanged(address) */
export const BlacklisterChanged = event('0xc67398012c111ce95ecb7429b933096c977380ee6c421175a71a4a4c6c88c06e', {
    newBlacklister: indexed(address),
})
export type BlacklisterChangedEventArgs = EParams<typeof BlacklisterChanged>

/** Burn(address,uint256) */
export const Burn = event('0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5', {
    burner: indexed(address),
    amount: uint256,
})
export type BurnEventArgs = EParams<typeof Burn>

/** MasterMinterChanged(address) */
export const MasterMinterChanged = event('0xdb66dfa9c6b8f5226fe9aac7e51897ae8ee94ac31dc70bb6c9900b2574b707e6', {
    newMasterMinter: indexed(address),
})
export type MasterMinterChangedEventArgs = EParams<typeof MasterMinterChanged>

/** Mint(address,address,uint256) */
export const Mint = event('0xab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f8', {
    minter: indexed(address),
    to: indexed(address),
    amount: uint256,
})
export type MintEventArgs = EParams<typeof Mint>

/** MinterConfigured(address,uint256) */
export const MinterConfigured = event('0x46980fca912ef9bcdbd36877427b6b90e860769f604e89c0e67720cece530d20', {
    minter: indexed(address),
    minterAllowedAmount: uint256,
})
export type MinterConfiguredEventArgs = EParams<typeof MinterConfigured>

/** MinterRemoved(address) */
export const MinterRemoved = event('0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692', {
    oldMinter: indexed(address),
})
export type MinterRemovedEventArgs = EParams<typeof MinterRemoved>

/** OwnershipTransferred(address,address) */
export const OwnershipTransferred = event('0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0', {
    previousOwner: address,
    newOwner: address,
})
export type OwnershipTransferredEventArgs = EParams<typeof OwnershipTransferred>

/** Pause() */
export const Pause = event('0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625', {})
export type PauseEventArgs = EParams<typeof Pause>

/** PauserChanged(address) */
export const PauserChanged = event('0xb80482a293ca2e013eda8683c9bd7fc8347cfdaeea5ede58cba46df502c2a604', {
    newAddress: indexed(address),
})
export type PauserChangedEventArgs = EParams<typeof PauserChanged>

/** RescuerChanged(address) */
export const RescuerChanged = event('0xe475e580d85111348e40d8ca33cfdd74c30fe1655c2d8537a13abc10065ffa5a', {
    newRescuer: indexed(address),
})
export type RescuerChangedEventArgs = EParams<typeof RescuerChanged>

/** Transfer(address,address,uint256) */
export const Transfer = event('0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef', {
    from: indexed(address),
    to: indexed(address),
    value: uint256,
})
export type TransferEventArgs = EParams<typeof Transfer>

/** UnBlacklisted(address) */
export const UnBlacklisted = event('0x117e3210bb9aa7d9baff172026820255c6f6c30ba8999d1c2fd88e2848137c4e', {
    _account: indexed(address),
})
export type UnBlacklistedEventArgs = EParams<typeof UnBlacklisted>

/** Unpause() */
export const Unpause = event('0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33', {})
export type UnpauseEventArgs = EParams<typeof Unpause>
