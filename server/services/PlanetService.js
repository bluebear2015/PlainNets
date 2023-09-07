import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async deletePlanet(planetId) {
        const existingPlanet = await dbContext.Planet.findByIdAndDelete(planetId)
        await existingPlanet.delete()
        return existingPlanet
    }
    async editPlanet(planetId, updates) {
        const existingPlanet = await dbContext.Planet.findById(planetId)
        if (!existingPlanet) throw new Error(`Unable to find exhbit at ${planetId}`)
        existingPlanet.name = updates.name || existingPlanet.name
        existingPlanet.atmosphere = updates.atmosphere != undefined ? updates.atmosphere : existingPlanet.atmosphere
        existingPlanet.biome = updates.biome != undefined ? updates.biome : existingPlanet.biome
        await existingPlanet.save()
        return existingPlanet
    }
    async createPlanet(planetData) {
        const newPlanet = await dbContext.Planet.create(planetData)
        return newPlanet
    }
    async getPlanet(query) {
        const planets = await dbContext.Planet.find(query)
        return planets

    }
    async getPlanetsByGalaxyId(galaxyId) {
        const galaxy = await dbContext.Planet.findById({ galaxyId }).populate('galaxy')

        return galaxy
    }






}

export const planetService = new PlanetService()