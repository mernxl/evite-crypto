import { loadConfig, NODE_ENV } from '@xelgrp/configu';

import packageJson from '../../package.json';

export interface AppConfiguration {
  NODE_ENV: NODE_ENV;
  PORT: number;
  HOST: string;

  NEW_RELIC_API_KEY: string;
  NEW_RELIC_OTEL_ENDPOINT: string;

  MONGODB_USE_IN_MEMORY_DB?: boolean;

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
}

const getConfig = (): AppConfiguration =>
  loadConfig<AppConfiguration>('app.ini', {
    PORT: 4040,
    HOST: 'localhost',
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
