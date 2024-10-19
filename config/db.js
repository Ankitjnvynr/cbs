import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Alumni } from '../models/Alumni';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  synchronize: true, // For development purposes only, avoid in production
  logging: false,
  entities: [Alumni],
});

AppDataSource.initialize()
  .then(() => console.log('Data Source has been initialized!'))
  .catch((err) => console.error('Error during Data Source initialization', err));
