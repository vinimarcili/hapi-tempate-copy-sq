interface IWebapp {
  _id: string;
  domains: string[];
  images: {
    favicon: {
      url: string;
    },
    logo: {
      url: string;
    }
  },
  name: string;
}

interface IWebAppsProvider {
  getWebapp(id: string): Promise<IWebapp>;
  getWebappByIds(ids: string | string[]): Promise<IWebapp[]>;
  getWebappByOrganizations(organizations: string): Promise<any>;
}

export { IWebapp, IWebAppsProvider }