import * as grpc from '@grpc/grpc-js';

import { config } from './config';
import { wLogger } from './config/winston';
import { cryptoHandlers } from './module/crypto.handlers';
import { ProtoGrpcType as CryptoProtoGrpcType } from './proto/crypto';
import { loadGRPCClient } from './utils';

function getServer(): grpc.Server {
  const cryptoProto = loadGRPCClient<CryptoProtoGrpcType>('crypto.proto');

  const server = new grpc.Server();
  server.addService(cryptoProto.crypto.Crypto.service, cryptoHandlers);
  return server;
}

const server = getServer();
server.bindAsync(
  `${config.HOST}:${config.PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err: Error | null, port: number) => {
    if (err) {
      wLogger.error(err);
    } else {
      wLogger.info(`🚀 GRPC Server started on ${config.HOST}:${port} (${config.NODE_ENV})`);
      server.start();
    }
  },
);
