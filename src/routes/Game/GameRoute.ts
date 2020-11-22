import express, { Request, Response } from 'express';
import { gameController } from '../../controllers';

/*
    Here is API that routes to the corresponding controller
    to perform CRUD (Create, Read, Update, Delete) functionalities
*/


export const router = express.Router({
    strict: true
});

// @route POST /game/
// @desc Route to create a game entry
router.post('/', (req: Request, res: Response) => {
    gameController.create(req, res)
    .then(result => {
        if (result['error']) throw Error(result['error']);
        else {
            res.json(result);
        }
    })
    .catch(err => {
        res.json(err);
    });
});

// @route GET /game/
// @desc Route to get all games
router.get('/', (req: Request, res: Response) => {
    gameController.read(req, res)
    .then(result => {
        if (result['error']) throw Error(result['error']);
        else {
            res.json(result);
        }
    })
    .catch(err => {
        res.json(err);
    });
});

// @route GET /game/:id
// @desc Route to get one game by Id
router.get('/:id', (req: Request, res: Response) => {
    gameController.findById(req, res)
    .then(result => {
        if (result['error']) throw Error(result['error']);
        else {
            res.json(result);
        }
    })
    .catch(err => {
        res.json(err);
    });
});

// @route PATCH /game/:id
// @desc Route to update a game by Id
router.patch('/:id', (req: Request, res: Response) => {
    gameController.update(req, res)
    .then(result => {
        if (result['error']) throw Error(result['error']);
        else {
            res.json(result);
        }
    })
    .catch(err => {
        res.json(err);
    });
    
});

// @route DELETE /game/:id
// @desc Route to delete a game entry by id
router.delete('/:id', (req: Request, res: Response) => {
    gameController.delete(req, res)
    .then(result => {
        if (result['error']) throw Error(result['error']);
        else {
            res.json(result);
        }
    })
    .catch(err => {
        res.json(err);
    });
});