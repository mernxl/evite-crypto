import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CryptoClient as _crypto_CryptoClient, CryptoDefinition as _crypto_CryptoDefinition } from './crypto/Crypto';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  crypto: {
    CreateOneSignatureInput: MessageTypeDefinition
    CreateOneSignatureOutput: MessageTypeDefinition
    CreateOneSigningKeyInput: MessageTypeDefinition
    CreateOneSigningKeyOutput: MessageTypeDefinition
    Crypto: SubtypeConstructor<typeof grpc.Client, _crypto_CryptoClient> & { service: _crypto_CryptoDefinition }
    VerifySignatureInput: MessageTypeDefinition
    VerifySignatureOutput: MessageTypeDefinition
  }
}

