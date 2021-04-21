import { RequestHandler } from 'express';
import { Item } from '../models/item';
const items: Item[] = [];
export const createItem: RequestHandler = (req, res, next) =>
{
    // const newItem = new Item()
};