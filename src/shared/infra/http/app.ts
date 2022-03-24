import { container } from 'tsyringe'
//  Server
import AppServer from './AppServer'

import createConnection from '@shared/infra/typeorm'
import '@shared/container'

export async function init () {
  await createConnection()
    .then(async connection => {connection.map(
      dbConnection => console.log(`Connected to DB (${dbConnection.options.type} - ${dbConnection.driver.database})`)
    )})
    .catch(error => console.log("Data Access Error : ", error))
  //  Setup server
  const appServer = container.resolve(AppServer)
  await appServer.start(container)
}
