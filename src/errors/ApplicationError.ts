import Boom from "boom";
const { name: apiName } = require('../../package')

type ApplicationErrorProps = {
  message: string;
  typeError?: string;
  statusCode?: number;
  output?: any;
  stack?: any;
  response?: any;
}

function ApplicationError({
  message,
  statusCode,
  typeError,
  stack,
  output,
  response
}: ApplicationErrorProps,
functionCall: string = apiName,
errorCode: string = '000'
): Boom<null> {
  if (response && response.body) {
    message = response.body.message
    stack = response.body.stack
  }

  const applicationError = Boom.badRequest(message) as any

  if (statusCode) {
    applicationError.output.statusCode = statusCode
  }

  applicationError.reformat()

  if (errorCode) {
    applicationError.output.payload.errorCode = errorCode
  }

  applicationError.output.payload.trackError = output && output.payload.trackError ? output.payload.trackError : []

  applicationError.output.payload.trackError.push(functionCall)

  applicationError.output.payload.trackError.reverse()

  if (stack) {
    applicationError.output.payload.stack = stack
  }

  if (typeError) {
    applicationError.output.payload.error = typeError
  }

  return applicationError
}

export { ApplicationError }
