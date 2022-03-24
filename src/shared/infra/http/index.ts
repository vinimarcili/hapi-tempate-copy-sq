import * as sqWinston from 'sq-winston'

sqWinston.setupAPM()

import "reflect-metadata"

import { init } from './app'

init()