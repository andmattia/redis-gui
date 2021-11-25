import type {Server} from '/@/use/database'
import type {RedisClientOptions, RedisClientType} from '@node-redis/client/dist/lib/client';

export type Key = {
  name: string,
  type: string,
  ttl: number,
  encoding: string,
};

type Keys = {
  [key: string]: Key,
}

export type AsyncResult = [string, string[]?]

export type KeysResult = {
  nextCursor: number,
  keys: Keys,
}

type RedisClients = {
  [key: string]: RedisClientType,
}

type CommandPromise = {
  [key: string]: Promise,
}

type Promises = {
  [key: string]: CommandPromise,
}

export type Redis = {
  pageSize: number,
  namespaceSeparator: string,
  current: string,
  client: RedisClientType,
  beSilent: boolean,
  connect: (server?: string = 'default', options?: { onReady?: () => void }) => Promise<RedisClientType>,
  buildConnectionConfig: (config: Server) => RedisClientOptions,
  disconnect: () => Promise<void>,
  silently: () => Redis
  keys: (pattern: string, limit: number, cursor: number) => Promise<KeysResult>,
};
