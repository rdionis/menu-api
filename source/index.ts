/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { itemsRouter } from './items/items.router'


dotenv.config()

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/menu/items', itemsRouter);

// Setting up first route

app.get('/', (request, response) => {
    response.send('<h1>Menu-api</h1>');
});

/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})