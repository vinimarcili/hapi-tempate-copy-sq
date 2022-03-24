import { container } from "tsyringe";
import * as lodash from 'lodash'

container.register(
  'lodash',
  { useValue: lodash }
)
