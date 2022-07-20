import * as grpc from '@grpc/grpc-js';
import { Client } from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

export const loadGRPCClient = <ProtoGrpcType>(protoFile: string) => {
  const packageDefinition = protoLoader.loadSync(path.join(process.cwd(), 'proto', protoFile));
  return grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
};

// keep this around until when the following error is resolved
// TypeError: Cannot read properties of undefined (reading 'checkOptionalUnaryResponseArguments')
/*export const grpcCallWrapper = async <T1, TResult>(
 fn: (arg1: T1, callback: (err: any, result: TResult) => any) => void,
 arg1: T1,
 ): Promise<NonNullable<TResult>> => {
 return new Promise<NonNullable<TResult>>((resolve, reject) => {
 return fn(arg1, (err, res) => {
 if (err) {
 return reject(err);
 }

 if (!res) {
 return reject(`RPC Failed for ${fn.name} with ${res}`);
 }

 return resolve(res!);
 });
 });
 };*/

export const grpcCallWrapper = async <RPCClient extends Client, T1, TResult>(
  client: RPCClient,
  fnName: keyof RPCClient & string,
  fn: (arg1: T1, callback: (err: any, result: TResult) => any) => void,
  arg1: T1,
): Promise<NonNullable<TResult>> => {
  return new Promise<NonNullable<TResult>>((resolve, reject) => {
    return (client as any)[fnName](arg1, (err: any, res: any) => {
      if (err) {
        return reject(err);
      }

      if (!res) {
        return reject(`RPC Failed for ${fnName} with ${res}`);
      }

      return resolve(res!);
    });
  });
};
