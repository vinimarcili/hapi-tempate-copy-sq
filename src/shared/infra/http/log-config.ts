import ILog from "@interfaces/ILog"

export default function createLogInstance (): ILog {
  const colors = {
    Reset: '\x1b[0m',
    Red: '\x1b[38m',
    Green: '\x1b[32m',
    Yellow: '\x1b[33m'
  }

  const infoLog = console.info
  const logLog = console.log
  const errorLog = console.error
  const warnLog = console.warn
    
  console.info= function(args: any) {
    const copyArgs = Array.prototype.slice.call(arguments)
    copyArgs.unshift(colors.Green)
    copyArgs.push(colors.Reset)
    infoLog.apply(null,copyArgs)
  }
    
  console.warn= function(args: any) {
    const copyArgs = Array.prototype.slice.call(arguments)
    copyArgs.unshift(colors.Yellow)
    copyArgs.push(colors.Reset)
    warnLog.apply(null,copyArgs)
  }
  
  console.error= function(args: any) {
    const copyArgs = Array.prototype.slice.call(arguments)
    copyArgs.unshift(colors.Red)
    copyArgs.push(colors.Reset)
    errorLog.apply(null,copyArgs)
  }

  const logInfo = console.info
  const logError = console.error
  const logWarn = console.warn
  return {
    info: logInfo,
    error: logError,
    warn: logWarn
  }
}