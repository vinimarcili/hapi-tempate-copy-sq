import { IRoute } from '@interfaces/IRoute'

import { 
  FindRecruitmentsByIdCampaignHandler
} from '@modules/recruitments/findRecruitmentsByIdCampaign/FindRecruitmentsByIdCampaign.handler'
import {
  FindCrecruitmentsByIdCampaignSchema
} from '@validations/schemas/FindCrecruitmentsByIdCampaignSchema'


const route: IRoute = {
  path: '/recruitments/find-by-campaign',
  method: 'GET',
  handler: FindRecruitmentsByIdCampaignHandler,
  options: {
    description: 'Retorna os recrutamentos de uma campanha',
    notes: 'Retorna os recrutamentos de uma campanha específica',
    tags: ['api', 'recruitments'],
    validate: {
      query: FindCrecruitmentsByIdCampaignSchema
    },
    plugins: {
      'hapi-swagger': {
        response: {
          '200': {
            'description': 'Recrutamento encontrada.'
          }
        }
      }
    }
  }
}

export default route
