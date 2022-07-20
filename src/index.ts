import * as grpc from '@grpc/grpc-js';

import { ProtoGrpcType as CryptoProtoGrpcType } from './proto/crypto';
import { config } from './config';
import { wLogger } from './config/winston';
import { cryptoHandlers } from './module/crypto.handlers';
import { loadGRPCClient } from './utils';

function getServer(): grpc.Server {
  const cryptoProto = loadGRPCClient<CryptoProtoGrpcType>('crypto.proto');

  const server = new grpc.Server();
  server.addService(cryptoProto.crypto.Crypto.service, cryptoHandlers);
  return server;
}

const server = getServer();
server.bindAsync(
  `${config.SERVER_HOST}:${config.SERVER_PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err: Error | null, port: number) => {
    if (err) {
      wLogger.error(err);
    } else {
      wLogger.info(`🚀 GRPC Server started on ${config.SERVER_HOST}:${port} (${config.NODE_ENV})`);
      server.start();
    }
  },
);
