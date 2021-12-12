import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.database.username,
  'password': config.database.password,
  'database': config.database.name,
  'host': config.database.host,

  'dialect': config.database.dialect || 'mysql',
  'storage': ':memory:',
});
