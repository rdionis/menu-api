// When a client application makes a request to your server, Express forwards the request to functions designed to handle that type of request (GET or POST) on the specified resource (items/). As such, each of these functions defines a route handler, which is also commonly referred to as a controller.

/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
// Here, you are importing the express package and two of its internal type definitions, Request and Response, which you can use to type the callback functions of your Express controllers.

import * as ItemService from './items.service';
// Here, you are importing the express package and two of its internal type definitions, Request and Response, which you can use to type the callback functions of your Express controllers.

import { BaseItem, Item } from "./item.interface";

// Finally, you also import the Item and Items interfaces, which are necessary to type the return values from the ItemService functions.

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get('/', async (
    request: Request,
    response: Response
) => {
    try {
        const items: Item[] = await ItemService.findAll();

        response.status(200).send(items);
    } catch (e) {
        response.status(500).send(e.message);
    }
});


// GET items/:id

itemsRouter.get('/:id', async (
    request: Request,
    response: Response
) => {
    const id: number = parseInt(request.params.id, 10);

    try {
        const item: Item = await ItemService.find(id);

        if (item) {
            return response.status(200).send(item);
        }

        response.status(404).send('item not found')

    } catch (e) {
        response.status(500).send(e.message)
    }
});

// POST items

itemsRouter.post('/', async (
    request: Request,
    response: Response
) => {
    try {
        const item: BaseItem = request.body;

        const newItem = await ItemService.create(item);


        response.status(201).json(newItem);
    } catch (e) {
        response.status(500).send(e.message);
    }
})

// PUT items/:id

itemsRouter.put('/:id', async (
    request: Request,
    response: Response
) => {
    const id: number = parseInt(request.params.id, 10);

    try {
        const itemUpdate: Item = request.body;
        const existingItem: Item = await ItemService.find(id);

        if (existingItem) {
            const updateItem = await ItemService.update(id, itemUpdate);
            return response.status(200).json(updateItem);
        }

        const newItem = await ItemService.create(itemUpdate);

        response.status(201).json(newItem);
    } catch (e) {
        response.status(500).send(e.message)
    }
});

// DELETE items/:id

itemsRouter.delete('/:id', async (
    request: Request,
    response: Response) => {

    try {
        const id: number = parseInt(request.params.id, 10);
        await ItemService.remove(id);

        response.sendStatus(204);
    } catch (e) {
        response.status(500).send(e.message);
    }
});