import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy.js'
import { PlanetSchema } from '../models/Planet.js'

class DbContext {

  Planet = mongoose.model('Planet', PlanetSchema)
  Galaxy = mongoose.model('Galaxy', GalaxySchema)
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
