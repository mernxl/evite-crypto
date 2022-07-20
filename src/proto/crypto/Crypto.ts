// Original file: proto/crypto.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateOneSignatureInput as _crypto_CreateOneSignatureInput, CreateOneSignatureInput__Output as _crypto_CreateOneSignatureInput__Output } from '../crypto/CreateOneSignatureInput';
import type { CreateOneSignatureOutput as _crypto_CreateOneSignatureOutput, CreateOneSignatureOutput__Output as _crypto_CreateOneSignatureOutput__Output } from '../crypto/CreateOneSignatureOutput';
import type { CreateOneSigningKeyInput as _crypto_CreateOneSigningKeyInput, CreateOneSigningKeyInput__Output as _crypto_CreateOneSigningKeyInput__Output } from '../crypto/CreateOneSigningKeyInput';
import type { CreateOneSigningKeyOutput as _crypto_CreateOneSigningKeyOutput, CreateOneSigningKeyOutput__Output as _crypto_CreateOneSigningKeyOutput__Output } from '../crypto/CreateOneSigningKeyOutput';
import type { VerifySignatureInput as _crypto_VerifySignatureInput, VerifySignatureInput__Output as _crypto_VerifySignatureInput__Output } from '../crypto/VerifySignatureInput';
import type { VerifySignatureOutput as _crypto_VerifySignatureOutput, VerifySignatureOutput__Output as _crypto_VerifySignatureOutput__Output } from '../crypto/VerifySignatureOutput';

export interface CryptoClient extends grpc.Client {
  createOneSignature(argument: _crypto_CreateOneSignatureInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_CreateOneSignatureOutput__Output>): grpc.ClientUnaryCall;
  createOneSignature(argument: _crypto_CreateOneSignatureInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_crypto_CreateOneSignatureOutput__Output>): grpc.ClientUnaryCall;
  createOneSignature(argument: _crypto_CreateOneSignatureInput, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_CreateOneSignatureOutput__Output>): grpc.ClientUnaryCall;
  createOneSignature(argument: _crypto_CreateOneSignatureInput, callback: grpc.requestCallback<_crypto_CreateOneSignatureOutput__Output>): grpc.ClientUnaryCall;
  createOneSignature(argument: _crypto_CreateOneSignatureInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_CreateOneSignatureOutput__Output>): grpc.ClientUnaryCall;
  createOneSignature(argument: _crypto_CreateOneSignatureInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_crypto_CreateOneSignatureOutput__Output>): grpc.ClientUnaryCall;
  createOneSignature(argument: _crypto_CreateOneSignatureInput, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_CreateOneSignatureOutput__Output>): grpc.ClientUnaryCall;
  createOneSignature(argument: _crypto_CreateOneSignatureInput, callback: grpc.requestCallback<_crypto_CreateOneSignatureOutput__Output>): grpc.ClientUnaryCall;
  
  createOneSigningKey(argument: _crypto_CreateOneSigningKeyInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_CreateOneSigningKeyOutput__Output>): grpc.ClientUnaryCall;
  createOneSigningKey(argument: _crypto_CreateOneSigningKeyInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_crypto_CreateOneSigningKeyOutput__Output>): grpc.ClientUnaryCall;
  createOneSigningKey(argument: _crypto_CreateOneSigningKeyInput, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_CreateOneSigningKeyOutput__Output>): grpc.ClientUnaryCall;
  createOneSigningKey(argument: _crypto_CreateOneSigningKeyInput, callback: grpc.requestCallback<_crypto_CreateOneSigningKeyOutput__Output>): grpc.ClientUnaryCall;
  createOneSigningKey(argument: _crypto_CreateOneSigningKeyInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_CreateOneSigningKeyOutput__Output>): grpc.ClientUnaryCall;
  createOneSigningKey(argument: _crypto_CreateOneSigningKeyInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_crypto_CreateOneSigningKeyOutput__Output>): grpc.ClientUnaryCall;
  createOneSigningKey(argument: _crypto_CreateOneSigningKeyInput, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_CreateOneSigningKeyOutput__Output>): grpc.ClientUnaryCall;
  createOneSigningKey(argument: _crypto_CreateOneSigningKeyInput, callback: grpc.requestCallback<_crypto_CreateOneSigningKeyOutput__Output>): grpc.ClientUnaryCall;
  
  verifySignature(argument: _crypto_VerifySignatureInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_VerifySignatureOutput__Output>): grpc.ClientUnaryCall;
  verifySignature(argument: _crypto_VerifySignatureInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_crypto_VerifySignatureOutput__Output>): grpc.ClientUnaryCall;
  verifySignature(argument: _crypto_VerifySignatureInput, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_VerifySignatureOutput__Output>): grpc.ClientUnaryCall;
  verifySignature(argument: _crypto_VerifySignatureInput, callback: grpc.requestCallback<_crypto_VerifySignatureOutput__Output>): grpc.ClientUnaryCall;
  verifySignature(argument: _crypto_VerifySignatureInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_VerifySignatureOutput__Output>): grpc.ClientUnaryCall;
  verifySignature(argument: _crypto_VerifySignatureInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_crypto_VerifySignatureOutput__Output>): grpc.ClientUnaryCall;
  verifySignature(argument: _crypto_VerifySignatureInput, options: grpc.CallOptions, callback: grpc.requestCallback<_crypto_VerifySignatureOutput__Output>): grpc.ClientUnaryCall;
  verifySignature(argument: _crypto_VerifySignatureInput, callback: grpc.requestCallback<_crypto_VerifySignatureOutput__Output>): grpc.ClientUnaryCall;
  
}

export interface CryptoHandlers extends grpc.UntypedServiceImplementation {
  createOneSignature: grpc.handleUnaryCall<_crypto_CreateOneSignatureInput__Output, _crypto_CreateOneSignatureOutput>;
  
  createOneSigningKey: grpc.handleUnaryCall<_crypto_CreateOneSigningKeyInput__Output, _crypto_CreateOneSigningKeyOutput>;
  
  verifySignature: grpc.handleUnaryCall<_crypto_VerifySignatureInput__Output, _crypto_VerifySignatureOutput>;
  
}

export interface CryptoDefinition extends grpc.ServiceDefinition {
  createOneSignature: MethodDefinition<_crypto_CreateOneSignatureInput, _crypto_CreateOneSignatureOutput, _crypto_CreateOneSignatureInput__Output, _crypto_CreateOneSignatureOutput__Output>
  createOneSigningKey: MethodDefinition<_crypto_CreateOneSigningKeyInput, _crypto_CreateOneSigningKeyOutput, _crypto_CreateOneSigningKeyInput__Output, _crypto_CreateOneSigningKeyOutput__Output>
  verifySignature: MethodDefinition<_crypto_VerifySignatureInput, _crypto_VerifySignatureOutput, _crypto_VerifySignatureInput__Output, _crypto_VerifySignatureOutput__Output>
}
