import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './usdc.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, spender: string, value: bigint] & {owner: string, spender: string, value: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    AuthorizationCanceled: new LogEvent<([authorizer: string, nonce: string] & {authorizer: string, nonce: string})>(
        abi, '0x1cdd46ff242716cdaa72d159d339a485b3438398348d68f09d7c8c0a59353d81'
    ),
    AuthorizationUsed: new LogEvent<([authorizer: string, nonce: string] & {authorizer: string, nonce: string})>(
        abi, '0x98de503528ee59b575ef0c0a2576a82497bfc029a5685b209e9ec333479b10a5'
    ),
    Blacklisted: new LogEvent<([_account: string] & {_account: string})>(
        abi, '0xffa4e6181777692565cf28528fc88fd1516ea86b56da075235fa575af6a4b855'
    ),
    BlacklisterChanged: new LogEvent<([newBlacklister: string] & {newBlacklister: string})>(
        abi, '0xc67398012c111ce95ecb7429b933096c977380ee6c421175a71a4a4c6c88c06e'
    ),
    Burn: new LogEvent<([burner: string, amount: bigint] & {burner: string, amount: bigint})>(
        abi, '0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5'
    ),
    MasterMinterChanged: new LogEvent<([newMasterMinter: string] & {newMasterMinter: string})>(
        abi, '0xdb66dfa9c6b8f5226fe9aac7e51897ae8ee94ac31dc70bb6c9900b2574b707e6'
    ),
    Mint: new LogEvent<([minter: string, to: string, amount: bigint] & {minter: string, to: string, amount: bigint})>(
        abi, '0xab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f8'
    ),
    MinterConfigured: new LogEvent<([minter: string, minterAllowedAmount: bigint] & {minter: string, minterAllowedAmount: bigint})>(
        abi, '0x46980fca912ef9bcdbd36877427b6b90e860769f604e89c0e67720cece530d20'
    ),
    MinterRemoved: new LogEvent<([oldMinter: string] & {oldMinter: string})>(
        abi, '0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Pause: new LogEvent<[]>(
        abi, '0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625'
    ),
    PauserChanged: new LogEvent<([newAddress: string] & {newAddress: string})>(
        abi, '0xb80482a293ca2e013eda8683c9bd7fc8347cfdaeea5ede58cba46df502c2a604'
    ),
    RescuerChanged: new LogEvent<([newRescuer: string] & {newRescuer: string})>(
        abi, '0xe475e580d85111348e40d8ca33cfdd74c30fe1655c2d8537a13abc10065ffa5a'
    ),
    Transfer: new LogEvent<([from: string, to: string, value: bigint] & {from: string, to: string, value: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    UnBlacklisted: new LogEvent<([_account: string] & {_account: string})>(
        abi, '0x117e3210bb9aa7d9baff172026820255c6f6c30ba8999d1c2fd88e2848137c4e'
    ),
    Unpause: new LogEvent<[]>(
        abi, '0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33'
    ),
}

export const functions = {
    CANCEL_AUTHORIZATION_TYPEHASH: new Func<[], {}, string>(
        abi, '0xd9169487'
    ),
    DOMAIN_SEPARATOR: new Func<[], {}, string>(
        abi, '0x3644e515'
    ),
    PERMIT_TYPEHASH: new Func<[], {}, string>(
        abi, '0x30adf81f'
    ),
    RECEIVE_WITH_AUTHORIZATION_TYPEHASH: new Func<[], {}, string>(
        abi, '0x7f2eecc3'
    ),
    TRANSFER_WITH_AUTHORIZATION_TYPEHASH: new Func<[], {}, string>(
        abi, '0xa0cc6a68'
    ),
    allowance: new Func<[owner: string, spender: string], {owner: string, spender: string}, bigint>(
        abi, '0xdd62ed3e'
    ),
    approve: new Func<[spender: string, value: bigint], {spender: string, value: bigint}, boolean>(
        abi, '0x095ea7b3'
    ),
    authorizationState: new Func<[authorizer: string, nonce: string], {authorizer: string, nonce: string}, boolean>(
        abi, '0xe94a0102'
    ),
    balanceOf: new Func<[account: string], {account: string}, bigint>(
        abi, '0x70a08231'
    ),
    blacklist: new Func<[_account: string], {_account: string}, []>(
        abi, '0xf9f92be4'
    ),
    blacklister: new Func<[], {}, string>(
        abi, '0xbd102430'
    ),
    burn: new Func<[_amount: bigint], {_amount: bigint}, []>(
        abi, '0x42966c68'
    ),
    cancelAuthorization: new Func<[authorizer: string, nonce: string, v: number, r: string, s: string], {authorizer: string, nonce: string, v: number, r: string, s: string}, []>(
        abi, '0x5a049a70'
    ),
    configureMinter: new Func<[minter: string, minterAllowedAmount: bigint], {minter: string, minterAllowedAmount: bigint}, boolean>(
        abi, '0x4e44d956'
    ),
    currency: new Func<[], {}, string>(
        abi, '0xe5a6b10f'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    decreaseAllowance: new Func<[spender: string, decrement: bigint], {spender: string, decrement: bigint}, boolean>(
        abi, '0xa457c2d7'
    ),
    increaseAllowance: new Func<[spender: string, increment: bigint], {spender: string, increment: bigint}, boolean>(
        abi, '0x39509351'
    ),
    initialize: new Func<[tokenName: string, tokenSymbol: string, tokenCurrency: string, tokenDecimals: number, newMasterMinter: string, newPauser: string, newBlacklister: string, newOwner: string], {tokenName: string, tokenSymbol: string, tokenCurrency: string, tokenDecimals: number, newMasterMinter: string, newPauser: string, newBlacklister: string, newOwner: string}, []>(
        abi, '0x3357162b'
    ),
    initializeV2: new Func<[newName: string], {newName: string}, []>(
        abi, '0xd608ea64'
    ),
    initializeV2_1: new Func<[lostAndFound: string], {lostAndFound: string}, []>(
        abi, '0x2fc81e09'
    ),
    isBlacklisted: new Func<[_account: string], {_account: string}, boolean>(
        abi, '0xfe575a87'
    ),
    isMinter: new Func<[account: string], {account: string}, boolean>(
        abi, '0xaa271e1a'
    ),
    masterMinter: new Func<[], {}, string>(
        abi, '0x35d99f35'
    ),
    mint: new Func<[_to: string, _amount: bigint], {_to: string, _amount: bigint}, boolean>(
        abi, '0x40c10f19'
    ),
    minterAllowance: new Func<[minter: string], {minter: string}, bigint>(
        abi, '0x8a6db9c3'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    nonces: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x7ecebe00'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    pauser: new Func<[], {}, string>(
        abi, '0x9fd0506d'
    ),
    permit: new Func<[owner: string, spender: string, value: bigint, deadline: bigint, v: number, r: string, s: string], {owner: string, spender: string, value: bigint, deadline: bigint, v: number, r: string, s: string}, []>(
        abi, '0xd505accf'
    ),
    receiveWithAuthorization: new Func<[from: string, to: string, value: bigint, validAfter: bigint, validBefore: bigint, nonce: string, v: number, r: string, s: string], {from: string, to: string, value: bigint, validAfter: bigint, validBefore: bigint, nonce: string, v: number, r: string, s: string}, []>(
        abi, '0xef55bec6'
    ),
    removeMinter: new Func<[minter: string], {minter: string}, boolean>(
        abi, '0x3092afd5'
    ),
    rescueERC20: new Func<[tokenContract: string, to: string, amount: bigint], {tokenContract: string, to: string, amount: bigint}, []>(
        abi, '0xb2118a8d'
    ),
    rescuer: new Func<[], {}, string>(
        abi, '0x38a63183'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[to: string, value: bigint], {to: string, value: bigint}, boolean>(
        abi, '0xa9059cbb'
    ),
    transferFrom: new Func<[from: string, to: string, value: bigint], {from: string, to: string, value: bigint}, boolean>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    transferWithAuthorization: new Func<[from: string, to: string, value: bigint, validAfter: bigint, validBefore: bigint, nonce: string, v: number, r: string, s: string], {from: string, to: string, value: bigint, validAfter: bigint, validBefore: bigint, nonce: string, v: number, r: string, s: string}, []>(
        abi, '0xe3ee160e'
    ),
    unBlacklist: new Func<[_account: string], {_account: string}, []>(
        abi, '0x1a895266'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
    updateBlacklister: new Func<[_newBlacklister: string], {_newBlacklister: string}, []>(
        abi, '0xad38bf22'
    ),
    updateMasterMinter: new Func<[_newMasterMinter: string], {_newMasterMinter: string}, []>(
        abi, '0xaa20e1e4'
    ),
    updatePauser: new Func<[_newPauser: string], {_newPauser: string}, []>(
        abi, '0x554bab3c'
    ),
    updateRescuer: new Func<[newRescuer: string], {newRescuer: string}, []>(
        abi, '0x2ab60045'
    ),
    version: new Func<[], {}, string>(
        abi, '0x54fd4d50'
    ),
}

export class Contract extends ContractBase {

    CANCEL_AUTHORIZATION_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.CANCEL_AUTHORIZATION_TYPEHASH, [])
    }

    DOMAIN_SEPARATOR(): Promise<string> {
        return this.eth_call(functions.DOMAIN_SEPARATOR, [])
    }

    PERMIT_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.PERMIT_TYPEHASH, [])
    }

    RECEIVE_WITH_AUTHORIZATION_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.RECEIVE_WITH_AUTHORIZATION_TYPEHASH, [])
    }

    TRANSFER_WITH_AUTHORIZATION_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.TRANSFER_WITH_AUTHORIZATION_TYPEHASH, [])
    }

    allowance(owner: string, spender: string): Promise<bigint> {
        return this.eth_call(functions.allowance, [owner, spender])
    }

    authorizationState(authorizer: string, nonce: string): Promise<boolean> {
        return this.eth_call(functions.authorizationState, [authorizer, nonce])
    }

    balanceOf(account: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [account])
    }

    blacklister(): Promise<string> {
        return this.eth_call(functions.blacklister, [])
    }

    currency(): Promise<string> {
        return this.eth_call(functions.currency, [])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    isBlacklisted(_account: string): Promise<boolean> {
        return this.eth_call(functions.isBlacklisted, [_account])
    }

    isMinter(account: string): Promise<boolean> {
        return this.eth_call(functions.isMinter, [account])
    }

    masterMinter(): Promise<string> {
        return this.eth_call(functions.masterMinter, [])
    }

    minterAllowance(minter: string): Promise<bigint> {
        return this.eth_call(functions.minterAllowance, [minter])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    nonces(owner: string): Promise<bigint> {
        return this.eth_call(functions.nonces, [owner])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    pauser(): Promise<string> {
        return this.eth_call(functions.pauser, [])
    }

    rescuer(): Promise<string> {
        return this.eth_call(functions.rescuer, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }

    version(): Promise<string> {
        return this.eth_call(functions.version, [])
    }
}
