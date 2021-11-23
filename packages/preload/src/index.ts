import {contextBridge} from 'electron'
import {readFileSync} from 'fs'
import type {ElectronApi} from '../types/electron-api'
import {promisify} from 'util'
import type {FsApi} from '../types/fs-api'
import {homedir} from 'os'
import type {UtilApi} from '../types/util-api'
import type {RedisApi} from '../types/redis-api'

const redis = require('redis')

/**
 * @see https://github.com/electron/electron/issues/21437#issuecomment-573522360
 */
const api: ElectronApi = {
  versions: process.versions,
};

const redisApi: RedisApi = redis;

const fsApi: FsApi = {
  readFileSync,
  homedir: homedir(),
};

const utilApi: UtilApi = {
  promisify,
};

/**
 * The "Main World" is the JavaScript context that your main renderer code runs in.
 * By default, the page you load in your renderer executes code in this world.
 *
 * @see https://www.electronjs.org/docs/api/context-bridge
 */
contextBridge.exposeInMainWorld('electron', api);
contextBridge.exposeInMainWorld('redisApi', redisApi);
contextBridge.exposeInMainWorld('fsApi', fsApi);
contextBridge.exposeInMainWorld('utilApi', utilApi);
