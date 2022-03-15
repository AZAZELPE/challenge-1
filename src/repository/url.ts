import getDB from '../db';

export const insertUrl = ({ id, url }) => {
  const db = getDB();

  return db('url').insert({ id, url });
};

export const findUrl = ({ id }) => {
  const db = getDB();

  return db('url').where({ id }).select();
};
