/**
 * Copied from @zilliqa/contract/types.ts
 */

import { Omit } from "utility-types";
import { TxParams } from "@zilliqa-js/account";
export declare enum ContractStatus {
  Deployed = 0,
  Rejected = 1,
  Initialised = 2,
}
export declare type DeployParams = Omit<
  TxParams,
  "toAddr" | "amount" | "code" | "data" | "receipt" | "signature"
>;
export declare type CallParams = Omit<
  TxParams,
  "toAddr" | "data" | "code" | "receipt" | "signature"
>;
export interface ContractObj {
  address: string;
  abi: ABI;
  init: any;
  state: any;
}
export interface Transition {
  vname: string;
  params: Field[];
}
/**
 * Interface for ABI returned by scilla-checker
 */
export interface ABI {
  scilla_major_version: number;
  vname: string;
  fields: Field[];
  params: Field[];
  transitions: Transition[];
}
export interface Field {
  vname: string;
  type: string;
  depth?: number;
}
export interface Value {
  vname: string;
  type: string;
  value: string | ADTValue;
}
interface ADTValue {
  constructor: string;
  argtypes: string[];
  arguments: Value[];
}
export declare type Param = Value;
export declare type TransitionParam = Value;
export declare type Init = Value[];
export declare type State = any;
export interface TransitionPayload {
  _tag: string;
  _amount: string;
  params: Value[];
}
export declare type DeployError =
  | "Code is empty and To addr is null"
  | "To Addr is null"
  | "Non - contract address called"
  | "Could not create Transaction"
  | "Unable to process";
export interface DeploySuccess {
  TranID: string;
  Info: string;
  ContractAddress?: string;
}
export {};
//# sourceMappingURL=types.d.ts.map
