import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
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
import { Token, User } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from)

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from)

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.creationFee(...)
  // - contract.dislikeFee(...)
  // - contract.dislikeThreshold(...)
  // - contract.getApproved(...)
  // - contract.getDislikes(...)
  // - contract.getExpression(...)
  // - contract.getLikes(...)
  // - contract.getfeesAccrued(...)
  // - contract.isApprovedForAll(...)
  // - contract.likeFee(...)
  // - contract.maxDislikes(...)
  // - contract.maxLikes(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.royaltyInfo(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenIdToDetails(...)
  // - contract.tokenURI(...)
  // - contract.tokensMinted(...)
  // - contract.totalActiveSupply(...)
  // - contract.totalUserMatic(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBatchMetadataUpdate(event: BatchMetadataUpdate): void {}

export function handleCreationFeeChange(event: CreationFeeChange): void {}

export function handleDislikeFeeChange(event: DislikeFeeChange): void {}

export function handleDislikeThresholdChange(
  event: DislikeThresholdChange
): void {}

export function handleLikeFeeChange(event: LikeFeeChange): void {}

export function handleMetadataUpdate(event: MetadataUpdate): void {
  let contract = Contract.bind(event.address)
  let tokenId = event.params._tokenId.toString()
  let token = Token.load(tokenId)
  if(token == null) { return }
  token.tokenURI = contract.tokenURI(event.params._tokenId)
  token.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleReceivedMATIC(event: ReceivedMATIC): void {}

export function handleTokenClaimed(event: TokenClaimed): void {}

export function handleTokenDisliked(event: TokenDisliked): void {}

export function handleTokenLiked(event: TokenLiked): void {}

export function handleTokenMinted(event: TokenMinted): void {
  let contract = Contract.bind(event.address)
  let token = new Token(event.params._tokenId.toString())

  token.tokenId = event.params._tokenId
  token.expression = contract.getExpression(event.params._tokenId)
  token.likes = BigInt.fromI32(0)
  token.dislikes = BigInt.fromI32(0)
  token.tokenURI = contract.tokenURI(event.params._tokenId)
  token.createdAtTimestamp = event.block.timestamp
  token.minter = event.params._minter.toHexString()
  token.owner = token.minter
  
  token.save()

  let user = User.load(event.params._minter.toHexString());
  if(!user) {
    user = new User(event.params._minter.toHexString());
    user.save();
  }
}

export function handleTokenNullified(event: TokenNullified): void {}

export function handleTransfer(event: Transfer): void {}

export function handleWithdraw(event: Withdraw): void {}
