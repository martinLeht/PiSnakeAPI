import express, { Request, Response } from 'express';
import { gameController } from '../../controllers/Controllers';

/*
    Snake Game API Endpoint that routes to the corresponding controller
    to perform CRUD (Create, Read, Update, Delete) functionalities
*/
export const router = express.Router({
    strict: true
});

// @route POST /games/
// @desc Route to create a game entry
router.post('/', async (req: Request, res: Response) => {
    try {
        const result: any = await gameController.create(req, res);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

// @route GET /games/
// @desc Route to get all games
router.get('/', async (req: Request, res: Response) => {
    try {
        const result:any = await gameController.read(req, res);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

// @route GET /games/:id
// @desc Route to get one game by Id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result: any = await gameController.findById(req, res);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

// @route PATCH /games/:id
// @desc Route to update a game by Id
router.patch('/:id', async (req: Request, res: Response) => {
    try {
        const result: any = await gameController.update(req, res);
        res.json(result)
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

// @route DELETE /games/:id
// @desc Route to delete a game entry by id
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const result: any = await gameController.delete(req, res);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});