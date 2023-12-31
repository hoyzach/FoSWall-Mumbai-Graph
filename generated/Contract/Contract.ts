// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BatchMetadataUpdate extends ethereum.Event {
  get params(): BatchMetadataUpdate__Params {
    return new BatchMetadataUpdate__Params(this);
  }
}

export class BatchMetadataUpdate__Params {
  _event: BatchMetadataUpdate;

  constructor(event: BatchMetadataUpdate) {
    this._event = event;
  }

  get _fromTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _toTokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CreationFeeChange extends ethereum.Event {
  get params(): CreationFeeChange__Params {
    return new CreationFeeChange__Params(this);
  }
}

export class CreationFeeChange__Params {
  _event: CreationFeeChange;

  constructor(event: CreationFeeChange) {
    this._event = event;
  }

  get _amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DislikeFeeChange extends ethereum.Event {
  get params(): DislikeFeeChange__Params {
    return new DislikeFeeChange__Params(this);
  }
}

export class DislikeFeeChange__Params {
  _event: DislikeFeeChange;

  constructor(event: DislikeFeeChange) {
    this._event = event;
  }

  get _amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DislikeThresholdChange extends ethereum.Event {
  get params(): DislikeThresholdChange__Params {
    return new DislikeThresholdChange__Params(this);
  }
}

export class DislikeThresholdChange__Params {
  _event: DislikeThresholdChange;

  constructor(event: DislikeThresholdChange) {
    this._event = event;
  }

  get _amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LikeFeeChange extends ethereum.Event {
  get params(): LikeFeeChange__Params {
    return new LikeFeeChange__Params(this);
  }
}

export class LikeFeeChange__Params {
  _event: LikeFeeChange;

  constructor(event: LikeFeeChange) {
    this._event = event;
  }

  get _amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class MetadataUpdate extends ethereum.Event {
  get params(): MetadataUpdate__Params {
    return new MetadataUpdate__Params(this);
  }
}

export class MetadataUpdate__Params {
  _event: MetadataUpdate;

  constructor(event: MetadataUpdate) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ReceivedMATIC extends ethereum.Event {
  get params(): ReceivedMATIC__Params {
    return new ReceivedMATIC__Params(this);
  }
}

export class ReceivedMATIC__Params {
  _event: ReceivedMATIC;

  constructor(event: ReceivedMATIC) {
    this._event = event;
  }

  get _address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenClaimed extends ethereum.Event {
  get params(): TokenClaimed__Params {
    return new TokenClaimed__Params(this);
  }
}

export class TokenClaimed__Params {
  _event: TokenClaimed;

  constructor(event: TokenClaimed) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _claimer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokenDisliked extends ethereum.Event {
  get params(): TokenDisliked__Params {
    return new TokenDisliked__Params(this);
  }
}

export class TokenDisliked__Params {
  _event: TokenDisliked;

  constructor(event: TokenDisliked) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _disliker(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenLiked extends ethereum.Event {
  get params(): TokenLiked__Params {
    return new TokenLiked__Params(this);
  }
}

export class TokenLiked__Params {
  _event: TokenLiked;

  constructor(event: TokenLiked) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _liker(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenMinted extends ethereum.Event {
  get params(): TokenMinted__Params {
    return new TokenMinted__Params(this);
  }
}

export class TokenMinted__Params {
  _event: TokenMinted;

  constructor(event: TokenMinted) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _minter(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenNullified extends ethereum.Event {
  get params(): TokenNullified__Params {
    return new TokenNullified__Params(this);
  }
}

export class TokenNullified__Params {
  _event: TokenNullified;

  constructor(event: TokenNullified) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get feesLost(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get _address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract__royaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class Contract__tokenIdToDetailsResult {
  value0: string;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: string, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getExpression(): string {
    return this.value0;
  }

  getLikes(): BigInt {
    return this.value1;
  }

  getDislikes(): BigInt {
    return this.value2;
  }

  getFeesAccrued(): BigInt {
    return this.value3;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  creationFee(): BigInt {
    let result = super.call("creationFee", "creationFee():(uint64)", []);

    return result[0].toBigInt();
  }

  try_creationFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("creationFee", "creationFee():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dislikeFee(): BigInt {
    let result = super.call("dislikeFee", "dislikeFee():(uint64)", []);

    return result[0].toBigInt();
  }

  try_dislikeFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("dislikeFee", "dislikeFee():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dislikeThreshold(): BigInt {
    let result = super.call(
      "dislikeThreshold",
      "dislikeThreshold():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_dislikeThreshold(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "dislikeThreshold",
      "dislikeThreshold():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDislikes(_tokenId: BigInt): BigInt {
    let result = super.call("getDislikes", "getDislikes(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_getDislikes(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getDislikes",
      "getDislikes(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getExpression(_tokenId: BigInt): string {
    let result = super.call(
      "getExpression",
      "getExpression(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toString();
  }

  try_getExpression(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getExpression",
      "getExpression(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getLikes(_tokenId: BigInt): BigInt {
    let result = super.call("getLikes", "getLikes(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_getLikes(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getLikes", "getLikes(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getfeesAccrued(_tokenId: BigInt): BigInt {
    let result = super.call(
      "getfeesAccrued",
      "getfeesAccrued(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getfeesAccrued(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getfeesAccrued",
      "getfeesAccrued(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  likeFee(): BigInt {
    let result = super.call("likeFee", "likeFee():(uint64)", []);

    return result[0].toBigInt();
  }

  try_likeFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("likeFee", "likeFee():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxDislikes(): BigInt {
    let result = super.call("maxDislikes", "maxDislikes():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxDislikes(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxDislikes", "maxDislikes():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxLikes(): BigInt {
    let result = super.call("maxLikes", "maxLikes():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxLikes(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxLikes", "maxLikes():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  royaltyInfo(tokenId: BigInt, salePrice: BigInt): Contract__royaltyInfoResult {
    let result = super.call(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salePrice)
      ]
    );

    return new Contract__royaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_royaltyInfo(
    tokenId: BigInt,
    salePrice: BigInt
  ): ethereum.CallResult<Contract__royaltyInfoResult> {
    let result = super.tryCall(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salePrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__royaltyInfoResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  supportsInterface(_interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(_interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenIdToDetails(param0: BigInt): Contract__tokenIdToDetailsResult {
    let result = super.call(
      "tokenIdToDetails",
      "tokenIdToDetails(uint256):(string,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__tokenIdToDetailsResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_tokenIdToDetails(
    param0: BigInt
  ): ethereum.CallResult<Contract__tokenIdToDetailsResult> {
    let result = super.tryCall(
      "tokenIdToDetails",
      "tokenIdToDetails(uint256):(string,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__tokenIdToDetailsResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokensMinted(): BigInt {
    let result = super.call("tokensMinted", "tokensMinted():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokensMinted(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokensMinted", "tokensMinted():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalActiveSupply(): BigInt {
    let result = super.call(
      "totalActiveSupply",
      "totalActiveSupply():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalActiveSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalActiveSupply",
      "totalActiveSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalUserMatic(): BigInt {
    let result = super.call("totalUserMatic", "totalUserMatic():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalUserMatic(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalUserMatic",
      "totalUserMatic():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddDislikeCall extends ethereum.Call {
  get inputs(): AddDislikeCall__Inputs {
    return new AddDislikeCall__Inputs(this);
  }

  get outputs(): AddDislikeCall__Outputs {
    return new AddDislikeCall__Outputs(this);
  }
}

export class AddDislikeCall__Inputs {
  _call: AddDislikeCall;

  constructor(call: AddDislikeCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddDislikeCall__Outputs {
  _call: AddDislikeCall;

  constructor(call: AddDislikeCall) {
    this._call = call;
  }
}

export class AddLikeCall extends ethereum.Call {
  get inputs(): AddLikeCall__Inputs {
    return new AddLikeCall__Inputs(this);
  }

  get outputs(): AddLikeCall__Outputs {
    return new AddLikeCall__Outputs(this);
  }
}

export class AddLikeCall__Inputs {
  _call: AddLikeCall;

  constructor(call: AddLikeCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddLikeCall__Outputs {
  _call: AddLikeCall;

  constructor(call: AddLikeCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ClaimTokenCall extends ethereum.Call {
  get inputs(): ClaimTokenCall__Inputs {
    return new ClaimTokenCall__Inputs(this);
  }

  get outputs(): ClaimTokenCall__Outputs {
    return new ClaimTokenCall__Outputs(this);
  }
}

export class ClaimTokenCall__Inputs {
  _call: ClaimTokenCall;

  constructor(call: ClaimTokenCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimTokenCall__Outputs {
  _call: ClaimTokenCall;

  constructor(call: ClaimTokenCall) {
    this._call = call;
  }
}

export class FundmeCall extends ethereum.Call {
  get inputs(): FundmeCall__Inputs {
    return new FundmeCall__Inputs(this);
  }

  get outputs(): FundmeCall__Outputs {
    return new FundmeCall__Outputs(this);
  }
}

export class FundmeCall__Inputs {
  _call: FundmeCall;

  constructor(call: FundmeCall) {
    this._call = call;
  }
}

export class FundmeCall__Outputs {
  _call: FundmeCall;

  constructor(call: FundmeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _expression(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetCreationFeeCall extends ethereum.Call {
  get inputs(): SetCreationFeeCall__Inputs {
    return new SetCreationFeeCall__Inputs(this);
  }

  get outputs(): SetCreationFeeCall__Outputs {
    return new SetCreationFeeCall__Outputs(this);
  }
}

export class SetCreationFeeCall__Inputs {
  _call: SetCreationFeeCall;

  constructor(call: SetCreationFeeCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCreationFeeCall__Outputs {
  _call: SetCreationFeeCall;

  constructor(call: SetCreationFeeCall) {
    this._call = call;
  }
}

export class SetDislikeFeeCall extends ethereum.Call {
  get inputs(): SetDislikeFeeCall__Inputs {
    return new SetDislikeFeeCall__Inputs(this);
  }

  get outputs(): SetDislikeFeeCall__Outputs {
    return new SetDislikeFeeCall__Outputs(this);
  }
}

export class SetDislikeFeeCall__Inputs {
  _call: SetDislikeFeeCall;

  constructor(call: SetDislikeFeeCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDislikeFeeCall__Outputs {
  _call: SetDislikeFeeCall;

  constructor(call: SetDislikeFeeCall) {
    this._call = call;
  }
}

export class SetDislikeThresholdCall extends ethereum.Call {
  get inputs(): SetDislikeThresholdCall__Inputs {
    return new SetDislikeThresholdCall__Inputs(this);
  }

  get outputs(): SetDislikeThresholdCall__Outputs {
    return new SetDislikeThresholdCall__Outputs(this);
  }
}

export class SetDislikeThresholdCall__Inputs {
  _call: SetDislikeThresholdCall;

  constructor(call: SetDislikeThresholdCall) {
    this._call = call;
  }

  get _dislikes(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDislikeThresholdCall__Outputs {
  _call: SetDislikeThresholdCall;

  constructor(call: SetDislikeThresholdCall) {
    this._call = call;
  }
}

export class SetLikeFeeCall extends ethereum.Call {
  get inputs(): SetLikeFeeCall__Inputs {
    return new SetLikeFeeCall__Inputs(this);
  }

  get outputs(): SetLikeFeeCall__Outputs {
    return new SetLikeFeeCall__Outputs(this);
  }
}

export class SetLikeFeeCall__Inputs {
  _call: SetLikeFeeCall;

  constructor(call: SetLikeFeeCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetLikeFeeCall__Outputs {
  _call: SetLikeFeeCall;

  constructor(call: SetLikeFeeCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _address(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
