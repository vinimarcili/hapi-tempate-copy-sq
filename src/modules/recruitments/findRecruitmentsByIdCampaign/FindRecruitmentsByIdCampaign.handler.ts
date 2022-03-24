import { Request, ResponseToolkit } from 'hapi';
import { DependencyContainer } from 'tsyringe';

import { ApplicationError } from '@errors/ApplicationError';

import { FindRecruitmentsByIdCampaignService } from './FindRecruitmentsByIdCampaign.service';

async function FindRecruitmentsByIdCampaignHandler (
  request: Request,
  reply: ResponseToolkit,
  container: DependencyContainer
) {
  try {
    const { idCampaign } = request.query

    const findRecruitmentsByIdCampaignService = container.resolve(FindRecruitmentsByIdCampaignService)

    const recruitments = await findRecruitmentsByIdCampaignService.execute({ idCampaign })

    return recruitments
  } catch (err) {
    return ApplicationError(err)
  }
}

export { FindRecruitmentsByIdCampaignHandler };