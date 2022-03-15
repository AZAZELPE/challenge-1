import Knex from 'knex';
import { v4 as uuid } from 'uuid';
import config from '../knexfile';
const knex = Knex(config.development);


(async() => {
  await knex('users')
    .insert({
      id: uuid(),
      name: 'Name'
    });

  const values = await knex.select().from('users');

  console.log(values);
})()
