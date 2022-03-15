import Knex, { Knex as KnexType } from 'knex';
import config from '../knexfile';
const knex = Knex(config.development);

const getDB = () => {
  return knex;
};

export default getDB;
