import Joi from 'joi'

const FindCrecruitmentsByIdCampaignSchema: Joi.PartialSchemaMap = {
  idCampaign: Joi.string(),
}

export { FindCrecruitmentsByIdCampaignSchema }