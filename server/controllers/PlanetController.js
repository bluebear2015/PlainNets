import { PlanetSchema } from "../models/Planet.js"
import { planetService } from "../services/PlanetService.js"
import BaseController from "../utils/BaseController.js"


export class PlanetController extends BaseController {

    constructor() {
        super('api/planet')
        this.router
            .post('', this.createPlanet)
            .get('', this.getPlanet)
            .put('/:planetId', this.editPlanet)
            .delete('/:planetId', this.deletePlanet)

    }

    async createPlanet(req, res, next) {
        try {
            const planetData = req.body
            const newPlanet = await planetService.createPlanet(planetData)
            return res.send(newPlanet)
        } catch (error) {
            next(error)
        }
    }

    async getPlanet(req, res, next) {
        try {
            const query = req.query
            const planet = await planetService.getPlanet(query)
            res.send(planet)
        } catch (error) {
            next(error)
        }
    }

    async editPlanet(request, response, next) {
        try {
            const updates = request.body
            const planetId = request.params.planetId
            const editedPlanet = await planetService.editPlanet(planetId, updates)
            response.send(editedPlanet)
        } catch (error) {
            next(error)
        }
    }
    async deletePlanet(req, res, next) {
        // const deletingPlanet = req.body
        const planetId = req.params.planetId
        const deletedPlanet = await planetService.deletePlanet(planetId)
        res.send(deletedPlanet)
    }
}