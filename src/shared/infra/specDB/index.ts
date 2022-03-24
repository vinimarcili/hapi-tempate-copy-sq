import { IWebapp } from "@shared/container/providers/WebAppsProvider/models/IWebAppsProvider";

const elektraWebAppDB: Partial<IWebapp>[] = [
  {
    _id: "5dc410b3d6761a0010929ae7",
    images: {
      favicon: {
        url: "https://storage.googleapis.com/squid-landing-pages/56605cfad4c606c85eb10dd6/webapp-5dc410b3d6761a0010929ae7-favicon.ico"
      },
      logo: {
        url: "https://storage.googleapis.com/squid-landing-pages/56605cfad4c606c85eb10dd6/webapp-5dc410b3d6761a0010929ae7-logo.png"
      }
    },
    domains: [
      "connectors.squidit.com.br"
    ],
    name: "Connectors"
  },
  {
    _id: "5f353aea11cfbb0011d97659",
    name: "Squid Brand Lovers",
    domains: [
      "brandlovers.squidit.com.br"
    ],
    images: {
      favicon: {
        url: "https://storage.googleapis.com/squid-landing-pages/5f353aea11cfbb0011d97659/webapp-favicon"
      },
      logo: {
        url: "https://storage.googleapis.com/squid-landing-pages/5f353aea11cfbb0011d97659/webapp-logo"
      }
    }
  },
  {
    _id: "611ac8b14de7c20011502084",
    domains: [
      "consultorasnaturachile.squidit.com.br",
      "consultora.natura.cl"
    ],
    name: "Consultoras Natura Chile",
    images: {
      favicon: {
        url: "https://storage.googleapis.com/squid-landing-pages/611ac8b14de7c20011502084/webapp-favicon"
      },
      logo: {
        url: "https://storage.googleapis.com/squid-landing-pages/611ac8b14de7c20011502084/webapp-logo"
      }
    }
  },
  {
    _id: "61b76c328dbd8b0011346c75",
    domains: [
      "unilevermx.squidit.com.br",
      "embajadoresunilever.com"
    ],
    name: "UNILEVER MÉXICO",
    images: {
      favicon: {
        url: "https://storage.googleapis.com/squid-landing-pages/61b76c328dbd8b0011346c75/webapp-favicon"
      },
      logo: {
        url: "https://storage.googleapis.com/squid-landing-pages/61b76c328dbd8b0011346c75/webapp-logo"
      }
    }
  }
]

export {
  elektraWebAppDB
}
