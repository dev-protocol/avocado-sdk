/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface AvoSignersListInterface extends utils.Interface {
  functions: {
    "avoFactory()": FunctionFragment;
    "avoMultiSafes(address)": FunctionFragment;
    "avoMultiSafesCount(address)": FunctionFragment;
    "isSignerOf(address,address)": FunctionFragment;
    "signers(address)": FunctionFragment;
    "signersCount(address)": FunctionFragment;
    "syncAddAvoSignerMappings(address,address[])": FunctionFragment;
    "syncRemoveAvoSignerMappings(address,address[])": FunctionFragment;
    "trackInStorage()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "avoFactory"
      | "avoMultiSafes"
      | "avoMultiSafesCount"
      | "isSignerOf"
      | "signers"
      | "signersCount"
      | "syncAddAvoSignerMappings"
      | "syncRemoveAvoSignerMappings"
      | "trackInStorage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "avoFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "avoMultiSafes",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "avoMultiSafesCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSignerOf",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "signers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "signersCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "syncAddAvoSignerMappings",
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "syncRemoveAvoSignerMappings",
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "trackInStorage",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "avoFactory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "avoMultiSafes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "avoMultiSafesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSignerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "signersCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "syncAddAvoSignerMappings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "syncRemoveAvoSignerMappings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trackInStorage",
    data: BytesLike
  ): Result;

  events: {
    "SignerMappingAdded(address,address)": EventFragment;
    "SignerMappingRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SignerMappingAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerMappingRemoved"): EventFragment;
}

export interface SignerMappingAddedEventObject {
  signer: string;
  avoMultiSafe: string;
}
export type SignerMappingAddedEvent = TypedEvent<
  [string, string],
  SignerMappingAddedEventObject
>;

export type SignerMappingAddedEventFilter =
  TypedEventFilter<SignerMappingAddedEvent>;

export interface SignerMappingRemovedEventObject {
  signer: string;
  avoMultiSafe: string;
}
export type SignerMappingRemovedEvent = TypedEvent<
  [string, string],
  SignerMappingRemovedEventObject
>;

export type SignerMappingRemovedEventFilter =
  TypedEventFilter<SignerMappingRemovedEvent>;

export interface AvoSignersList extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AvoSignersListInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    avoFactory(overrides?: CallOverrides): Promise<[string]>;

    avoMultiSafes(
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    avoMultiSafesCount(
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isSignerOf(
      avoMultiSafe_: PromiseOrValue<string>,
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    signers(
      avoMultiSafe_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    signersCount(
      avoMultiSafe_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    syncAddAvoSignerMappings(
      avoMultiSafe_: PromiseOrValue<string>,
      addSigners_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    syncRemoveAvoSignerMappings(
      avoMultiSafe_: PromiseOrValue<string>,
      removeSigners_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    trackInStorage(overrides?: CallOverrides): Promise<[boolean]>;
  };

  avoFactory(overrides?: CallOverrides): Promise<string>;

  avoMultiSafes(
    signer_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  avoMultiSafesCount(
    signer_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isSignerOf(
    avoMultiSafe_: PromiseOrValue<string>,
    signer_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  signers(
    avoMultiSafe_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  signersCount(
    avoMultiSafe_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  syncAddAvoSignerMappings(
    avoMultiSafe_: PromiseOrValue<string>,
    addSigners_: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  syncRemoveAvoSignerMappings(
    avoMultiSafe_: PromiseOrValue<string>,
    removeSigners_: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  trackInStorage(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    avoFactory(overrides?: CallOverrides): Promise<string>;

    avoMultiSafes(
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    avoMultiSafesCount(
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSignerOf(
      avoMultiSafe_: PromiseOrValue<string>,
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    signers(
      avoMultiSafe_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    signersCount(
      avoMultiSafe_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    syncAddAvoSignerMappings(
      avoMultiSafe_: PromiseOrValue<string>,
      addSigners_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    syncRemoveAvoSignerMappings(
      avoMultiSafe_: PromiseOrValue<string>,
      removeSigners_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    trackInStorage(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "SignerMappingAdded(address,address)"(
      signer?: null,
      avoMultiSafe?: null
    ): SignerMappingAddedEventFilter;
    SignerMappingAdded(
      signer?: null,
      avoMultiSafe?: null
    ): SignerMappingAddedEventFilter;

    "SignerMappingRemoved(address,address)"(
      signer?: null,
      avoMultiSafe?: null
    ): SignerMappingRemovedEventFilter;
    SignerMappingRemoved(
      signer?: null,
      avoMultiSafe?: null
    ): SignerMappingRemovedEventFilter;
  };

  estimateGas: {
    avoFactory(overrides?: CallOverrides): Promise<BigNumber>;

    avoMultiSafes(
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    avoMultiSafesCount(
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSignerOf(
      avoMultiSafe_: PromiseOrValue<string>,
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signers(
      avoMultiSafe_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signersCount(
      avoMultiSafe_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    syncAddAvoSignerMappings(
      avoMultiSafe_: PromiseOrValue<string>,
      addSigners_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    syncRemoveAvoSignerMappings(
      avoMultiSafe_: PromiseOrValue<string>,
      removeSigners_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    trackInStorage(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    avoFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    avoMultiSafes(
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    avoMultiSafesCount(
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSignerOf(
      avoMultiSafe_: PromiseOrValue<string>,
      signer_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signers(
      avoMultiSafe_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signersCount(
      avoMultiSafe_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    syncAddAvoSignerMappings(
      avoMultiSafe_: PromiseOrValue<string>,
      addSigners_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    syncRemoveAvoSignerMappings(
      avoMultiSafe_: PromiseOrValue<string>,
      removeSigners_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    trackInStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
