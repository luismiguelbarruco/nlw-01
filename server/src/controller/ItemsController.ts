import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response) {
        const itens = await knex('items').select('*');
    
        const serializedItens = itens.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.40:3333/uploads/${item.image}`
            };
        });
    
        return response.json(serializedItens);
    }
}

export default ItemsController;