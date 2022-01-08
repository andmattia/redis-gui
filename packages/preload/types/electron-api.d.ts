import type {FsApi} from './fs-api'
import type {UtilApi} from 'types/util-api'
import type {RedisApi} from './redis-api'


interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>

  openExternal(url: string, options?: OpenExternalOptions): Promise<void>;
}

declare global {
  interface Window {
    electron: Readonly<ElectronApi>
    electronRequire?: NodeRequire,
    redisApi: Readonly<RedisApi>,
    fsApi: Readonly<FsApi>,
    utilApi: Readonly<UtilApi>,
  }
}