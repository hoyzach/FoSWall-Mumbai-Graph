import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  CreationFeeChange,
  DislikeFeeChange,
  DislikeThresholdChange,
  LikeFeeChange,
  MetadataUpdate,
  OwnershipTransferred,
  ReceivedMATIC,
  TokenClaimed,
  TokenDisliked,
  TokenLiked,
  TokenMinted,
  TokenNullified,
  Transfer,
  Withdraw
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBatchMetadataUpdateEvent(
  _fromTokenId: BigInt,
  _toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_fromTokenId",
      ethereum.Value.fromUnsignedBigInt(_fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_toTokenId",
      ethereum.Value.fromUnsignedBigInt(_toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createCreationFeeChangeEvent(
  _amount: BigInt
): CreationFeeChange {
  let creationFeeChangeEvent = changetype<CreationFeeChange>(newMockEvent())

  creationFeeChangeEvent.parameters = new Array()

  creationFeeChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return creationFeeChangeEvent
}

export function createDislikeFeeChangeEvent(_amount: BigInt): DislikeFeeChange {
  let dislikeFeeChangeEvent = changetype<DislikeFeeChange>(newMockEvent())

  dislikeFeeChangeEvent.parameters = new Array()

  dislikeFeeChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return dislikeFeeChangeEvent
}

export function createDislikeThresholdChangeEvent(
  _amount: BigInt
): DislikeThresholdChange {
  let dislikeThresholdChangeEvent = changetype<DislikeThresholdChange>(
    newMockEvent()
  )

  dislikeThresholdChangeEvent.parameters = new Array()

  dislikeThresholdChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return dislikeThresholdChangeEvent
}

export function createLikeFeeChangeEvent(_amount: BigInt): LikeFeeChange {
  let likeFeeChangeEvent = changetype<LikeFeeChange>(newMockEvent())

  likeFeeChangeEvent.parameters = new Array()

  likeFeeChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return likeFeeChangeEvent
}

export function createMetadataUpdateEvent(_tokenId: BigInt): MetadataUpdate {
  let metadataUpdateEvent = changetype<MetadataUpdate>(newMockEvent())

  metadataUpdateEvent.parameters = new Array()

  metadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return metadataUpdateEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createReceivedMATICEvent(
  _address: Address,
  _amount: BigInt
): ReceivedMATIC {
  let receivedMaticEvent = changetype<ReceivedMATIC>(newMockEvent())

  receivedMaticEvent.parameters = new Array()

  receivedMaticEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  receivedMaticEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return receivedMaticEvent
}

export function createTokenClaimedEvent(
  _tokenId: BigInt,
  _claimer: Address,
  _amount: BigInt
): TokenClaimed {
  let tokenClaimedEvent = changetype<TokenClaimed>(newMockEvent())

  tokenClaimedEvent.parameters = new Array()

  tokenClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenClaimedEvent.parameters.push(
    new ethereum.EventParam("_claimer", ethereum.Value.fromAddress(_claimer))
  )
  tokenClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return tokenClaimedEvent
}

export function createTokenDislikedEvent(
  _tokenId: BigInt,
  _disliker: Address
): TokenDisliked {
  let tokenDislikedEvent = changetype<TokenDisliked>(newMockEvent())

  tokenDislikedEvent.parameters = new Array()

  tokenDislikedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenDislikedEvent.parameters.push(
    new ethereum.EventParam("_disliker", ethereum.Value.fromAddress(_disliker))
  )

  return tokenDislikedEvent
}

export function createTokenLikedEvent(
  _tokenId: BigInt,
  _liker: Address
): TokenLiked {
  let tokenLikedEvent = changetype<TokenLiked>(newMockEvent())

  tokenLikedEvent.parameters = new Array()

  tokenLikedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenLikedEvent.parameters.push(
    new ethereum.EventParam("_liker", ethereum.Value.fromAddress(_liker))
  )

  return tokenLikedEvent
}

export function createTokenMintedEvent(
  _tokenId: BigInt,
  _minter: Address
): TokenMinted {
  let tokenMintedEvent = changetype<TokenMinted>(newMockEvent())

  tokenMintedEvent.parameters = new Array()

  tokenMintedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenMintedEvent.parameters.push(
    new ethereum.EventParam("_minter", ethereum.Value.fromAddress(_minter))
  )

  return tokenMintedEvent
}

export function createTokenNullifiedEvent(
  _tokenId: BigInt,
  feesLost: BigInt
): TokenNullified {
  let tokenNullifiedEvent = changetype<TokenNullified>(newMockEvent())

  tokenNullifiedEvent.parameters = new Array()

  tokenNullifiedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  tokenNullifiedEvent.parameters.push(
    new ethereum.EventParam(
      "feesLost",
      ethereum.Value.fromUnsignedBigInt(feesLost)
    )
  )

  return tokenNullifiedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createWithdrawEvent(
  _address: Address,
  _amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return withdrawEvent
}
