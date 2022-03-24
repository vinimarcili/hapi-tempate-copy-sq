import Joi from 'joi'

const GetCategoriesSchema: Joi.PartialSchemaMap = {
  parents: Joi.alternatives().try(Joi.array(), Joi.number()),
  raw: Joi.boolean().optional(),
}

export { GetCategoriesSchema }