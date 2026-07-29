import { ContractBase } from '../abi.support.js'
import { CANCEL_AUTHORIZATION_TYPEHASH, DOMAIN_SEPARATOR, PERMIT_TYPEHASH, RECEIVE_WITH_AUTHORIZATION_TYPEHASH, TRANSFER_WITH_AUTHORIZATION_TYPEHASH, allowance, approve, authorizationState, balanceOf, blacklister, configureMinter, currency, decimals, decreaseAllowance, increaseAllowance, isBlacklisted, isMinter, masterMinter, mint, minterAllowance, name, nonces, owner, paused, pauser, removeMinter, rescuer, symbol, totalSupply, transfer, transferFrom, version } from './functions.js'
import type { AllowanceParams, ApproveParams, AuthorizationStateParams, BalanceOfParams, ConfigureMinterParams, DecreaseAllowanceParams, IncreaseAllowanceParams, IsBlacklistedParams, IsMinterParams, MintParams, MinterAllowanceParams, NoncesParams, RemoveMinterParams, TransferFromParams, TransferParams } from './functions.js'

export class Contract extends ContractBase {
    CANCEL_AUTHORIZATION_TYPEHASH() {
        return this.eth_call(CANCEL_AUTHORIZATION_TYPEHASH, {})
    }

    DOMAIN_SEPARATOR() {
        return this.eth_call(DOMAIN_SEPARATOR, {})
    }

    PERMIT_TYPEHASH() {
        return this.eth_call(PERMIT_TYPEHASH, {})
    }

    RECEIVE_WITH_AUTHORIZATION_TYPEHASH() {
        return this.eth_call(RECEIVE_WITH_AUTHORIZATION_TYPEHASH, {})
    }

    TRANSFER_WITH_AUTHORIZATION_TYPEHASH() {
        return this.eth_call(TRANSFER_WITH_AUTHORIZATION_TYPEHASH, {})
    }

    allowance(owner: AllowanceParams["owner"], spender: AllowanceParams["spender"]) {
        return this.eth_call(allowance, {owner, spender})
    }

    approve(spender: ApproveParams["spender"], value: ApproveParams["value"]) {
        return this.eth_call(approve, {spender, value})
    }

    authorizationState(authorizer: AuthorizationStateParams["authorizer"], nonce: AuthorizationStateParams["nonce"]) {
        return this.eth_call(authorizationState, {authorizer, nonce})
    }

    balanceOf(account: BalanceOfParams["account"]) {
        return this.eth_call(balanceOf, {account})
    }

    blacklister() {
        return this.eth_call(blacklister, {})
    }

    configureMinter(minter: ConfigureMinterParams["minter"], minterAllowedAmount: ConfigureMinterParams["minterAllowedAmount"]) {
        return this.eth_call(configureMinter, {minter, minterAllowedAmount})
    }

    currency() {
        return this.eth_call(currency, {})
    }

    decimals() {
        return this.eth_call(decimals, {})
    }

    decreaseAllowance(spender: DecreaseAllowanceParams["spender"], decrement: DecreaseAllowanceParams["decrement"]) {
        return this.eth_call(decreaseAllowance, {spender, decrement})
    }

    increaseAllowance(spender: IncreaseAllowanceParams["spender"], increment: IncreaseAllowanceParams["increment"]) {
        return this.eth_call(increaseAllowance, {spender, increment})
    }

    isBlacklisted(_account: IsBlacklistedParams["_account"]) {
        return this.eth_call(isBlacklisted, {_account})
    }

    isMinter(account: IsMinterParams["account"]) {
        return this.eth_call(isMinter, {account})
    }

    masterMinter() {
        return this.eth_call(masterMinter, {})
    }

    mint(_to: MintParams["_to"], _amount: MintParams["_amount"]) {
        return this.eth_call(mint, {_to, _amount})
    }

    minterAllowance(minter: MinterAllowanceParams["minter"]) {
        return this.eth_call(minterAllowance, {minter})
    }

    name() {
        return this.eth_call(name, {})
    }

    nonces(owner: NoncesParams["owner"]) {
        return this.eth_call(nonces, {owner})
    }

    owner() {
        return this.eth_call(owner, {})
    }

    paused() {
        return this.eth_call(paused, {})
    }

    pauser() {
        return this.eth_call(pauser, {})
    }

    removeMinter(minter: RemoveMinterParams["minter"]) {
        return this.eth_call(removeMinter, {minter})
    }

    rescuer() {
        return this.eth_call(rescuer, {})
    }

    symbol() {
        return this.eth_call(symbol, {})
    }

    totalSupply() {
        return this.eth_call(totalSupply, {})
    }

    transfer(to: TransferParams["to"], value: TransferParams["value"]) {
        return this.eth_call(transfer, {to, value})
    }

    transferFrom(from: TransferFromParams["from"], to: TransferFromParams["to"], value: TransferFromParams["value"]) {
        return this.eth_call(transferFrom, {from, to, value})
    }

    version() {
        return this.eth_call(version, {})
    }
}
