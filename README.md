# Node.js and TypeScript Tutorial: Build a CRUD API

See the online tutorial [here](https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/).

## Some notes:

Let's briefly break down the options that ```ts-node-dev``` takes:

- ```--respawn```: Keep watching for changes after the script has exited.

- ```--pretty```: Use pretty diagnostic formatter (TS_NODE_PRETTY).

- ```--transpile-only```: Use TypeScript's faster transpileModule (TS_NODE_TRANSPILE_ONLY).

- src/index.ts: This is the application's entry file.

<br>
<br>

### Model Data with TypeScript Interfaces
<br>
Before creating any controllers and services, define the structure of the data you want to manage. A menu item has the following properties:

- **id**: (number) Unique identifier for the item record.
- **name**: (string) Name of the item.
- **price**: (number) Price of the item in cents.
- **description**: (string) Description of the item.
- **image**: (string) URL pointing to the item's image.