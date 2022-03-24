import { container } from "tsyringe";
import moment from 'moment'

container.register(
  'moment',
  { useValue: moment }
)
