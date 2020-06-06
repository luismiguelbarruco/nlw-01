import Knex, { Seeder } from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterrias', image: 'beterias.svg' },
        { title: 'Pápeis e Papelão', image: 'papeis-palelao.svg' },
        { title: 'Residuos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Residuos Orgânicos', image: 'organicos.svg' },
        { title: 'Ólea de cozinha', image: 'oleo.svg' },
    ])
}