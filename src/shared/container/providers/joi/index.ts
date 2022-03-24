import { container } from 'tsyringe'
import joi from 'joi'

container.register(
  'joi',
  { useValue: joi }
)
