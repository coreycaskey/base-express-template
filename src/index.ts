import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getMockDb, updateMockDb } from './mock-db';

// store environment variables in .env files
dotenv.config();

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors());

app.get('/', (request: Request, response: Response) => {
  response.status(200).send(getMockDb());
  // response.status(400).send('Fail');
});

app.post('/api', (request: Request, response: Response) => {
  updateMockDb(request.body);
  response.status(200).send(getMockDb());
});

app
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server running at PORT :::', PORT);
  })
  .on('error', (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
