import { RedisOptions } from 'ioredis'

import { processEnv } from '@shared/infra/http/environment'

interface ICacheConfig {
  driver: 'redis',
  config: {
    redis: RedisOptions
  }
}
export default {
  driver: 'redis',
  config: {
    redis: {
      host: processEnv.CACHE_HOST,
      port: Number(processEnv.CACHE_PORT),
      password: processEnv.CACHE_PASSWORD,
    },
  },
} as ICacheConfig