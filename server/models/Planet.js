import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxLength: 25 },
    biome: { type: String, required: true, maxLength: 100 },
    atmosphere: { type: Boolean, default: false },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'galaxy' }

})

PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
})