import { loadConfig, NODE_ENV } from '@xelgrp/configu';

import packageJson from '../../package.json';

export interface AppConfiguration {
  NODE_ENV: NODE_ENV;
  SERVER_PORT: number;
  SERVER_HOST: string;
  REVERSE_PROXY: boolean;
  MONGODB_USE_IN_MEMORY_DB?: boolean;

  MINIO_REGION?: string;
  MINIO_USE_SSL?: string;

  CRYPTO: {
    SYSTEM_SECRET: string;
  };

  app: {
    name: string;
    version: string;
    support: {
      name: string;
      email: string;
    };
  };
  mongodb: {
    user?: string;
    pass?: string;
    uri?: string;
    port: number;
    host: string;
    defaultDb: string;
  };
  minio: {
    endpoint: string;
    port: number;
    accessKey: string;
    secretKey: string;
  };
  mailer: {
    user: string;
    pass: string;
    port: number;
    host: string;
  };
}

const getConfig = (): AppConfiguration =>
  loadConfig<AppConfiguration>('app.ini', {
    SERVER_PORT: 4040,
    SERVER_HOST: 'localhost',
    app: {
      name: packageJson.name,
      version: packageJson.version,
      support: {
        name: 'Evite Support',
        email: 'noreply@evite.app',
      },
    },
    mongodb: {
      port: 27017,
      host: 'localhost',
      defaultDb: packageJson.name,
    },
  });

const config = getConfig();

export { config, getConfig };
