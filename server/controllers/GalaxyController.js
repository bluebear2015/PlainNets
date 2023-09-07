import BaseController from "../utils/BaseController.js"
import { galaxyService } from "../services/GalaxyService.js"
import { planetService } from "../services/PlanetService.js"


export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxy')
        this.router
            .get('', this.getGalaxy)
            .post('', this.createGalaxy)
            .get('/:galaxyId/planet', this.getPlanetsByGalaxyId)
            .put('/:galaxyId', this.editGalaxy)
            .delete('/:galaxyId', this.deleteGalaxy)

    }
    async getGalaxy(req, res, next) {
        try {
            const query = req.query
            const galaxy = await galaxyService.getGalaxy(query)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
    async editGalaxy(request, response, next) {
        try {
            const updates = request.body
            const galaxyId = request.params.galaxyId
            const editedGalaxy = await galaxyService.editGalaxy(galaxyId, updates)
            response.send(editedGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            const newGalaxy = await galaxyService.createGalaxy(galaxyData)
            return res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsByGalaxyId(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const Planet = await planetService.getPlanetsByGalaxyId(galaxyId)
            return res.send(Planet)
        } catch (error) {
            next(error)
        }
    }

    async deleteGalaxy(req, res, next) {
        // const deletingPlanet = req.body
        const galaxyId = req.params.galaxyId
        const deletedGalaxy = await galaxyService.deletePlanet(galaxyId)
        res.send(deletedGalaxy)
    }

}