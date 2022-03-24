import { container } from 'tsyringe'

import { IWebAppsProvider } from './models/IWebAppsProvider'
import ElektraWebAppsProvider from './implementations/ElektraWebAppsProvider'

const providers = {
  elektra: ElektraWebAppsProvider,
}

container.registerSingleton<IWebAppsProvider>(
  'WebAppsProvider',
  providers.elektra,
)