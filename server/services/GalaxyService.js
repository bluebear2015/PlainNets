import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { Query } from "mongoose"

class GalaxyService {
    async deletePlanet(galaxyId) {
        const existingGalaxy = await dbContext.Galaxy.findByIdAndDelete(galaxyId)
        await existingGalaxy.delete()
        return existingGalaxy
    }
    async editGalaxy(galaxyId, updates) {
        const existingGalaxy = await dbContext.Galaxy.findById(galaxyId)
        existingGalaxy.name = updates.name || existingGalaxy.name
        existingGalaxy.stars = updates.stars != undefined ? updates.stars : existingGalaxy.stars
        await existingGalaxy.save()
        return existingGalaxy
    }
    async createGalaxy(galaxyData) {
        const newGalaxy = await dbContext.Galaxy.create(galaxyData)
        return newGalaxy
    }

    async getGalaxy(query) {
        const galaxy = await dbContext.Galaxy.find(query)
        return galaxy
    }


}

export const galaxyService = new GalaxyService()