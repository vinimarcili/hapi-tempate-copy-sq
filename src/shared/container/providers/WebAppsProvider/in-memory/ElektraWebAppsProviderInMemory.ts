import { elektraWebAppDB } from "@shared/infra/specDB";

import { IWebapp, IWebAppsProvider } from "../models/IWebAppsProvider";

export default class ElektraWebAppsProviderInMemory implements IWebAppsProvider {
  webApps = elektraWebAppDB;

  async getWebapp(id: string): Promise<IWebapp> {
    const webApp = this.webApps.find(
      (webApp) => webApp._id === id
    )

    return webApp as IWebapp
  }

  async getWebappByIds(ids: string | string[]): Promise<IWebapp[]> {
    const webApps = this.webApps
      .filter((webApp) => {
        if (ids.includes(webApp._id)) {
          return webApp
        }
      })

    return webApps as IWebapp[]
  }

  async getWebappByOrganizations(organizations: string): Promise<any> {
    const webApps = this.webApps

    return webApps
  }
}