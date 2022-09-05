# Node.js and TypeScript Tutorial: Build a CRUD API

See the online tutorial [here](https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/).

### Some notes:

Let's briefly break down the options that ```ts-node-dev``` takes:

- ```--respawn```: Keep watching for changes after the script has exited.

- ```--pretty```: Use pretty diagnostic formatter (TS_NODE_PRETTY).

- ```--transpile-only```: Use TypeScript's faster transpileModule (TS_NODE_TRANSPILE_ONLY).

- source/index.ts: This is the application's entry file.

<br>
<br>

## Model Data with TypeScript Interfaces
<br>
Before creating any controllers and services, define the structure of the data you want to manage. A menu item has the following properties:

- **id**: (number) Unique identifier for the item record.
- **name**: (string) Name of the item.
- **price**: (number) Price of the item in cents.
- **description**: (string) Description of the item.
- **image**: (string) URL pointing to the item's image.
<br><br>



---
<br>

Any other project can use the code of this service module as it's not tied to any particular framework. You use it in the next section to create your API controllers.

It's worth mentioning that you could have used a TypeScript class to define and encapsulate the service logic; however, using functions makes testing your service module much easier.
<br><br>
## Create Express Controllers
<br>

For this application, you'll create endpoints to access an items resource to perform read and write operations on menu items:

| Endpoints | Description |
----------- | -----------
**GET /api/menu/items** | get all items
**GET /api/menu/items/:id** | get a single item using an id parameter
**POST /api/menu/items** |  create an item
**PUT /api/menu/items/:id** | update an item using an id parameter
**DELETE /api/menu/items/:id** | remove an item using an id parameter
|    |     |

You can refer to the [WHATABYTE Menu API](https://github.com/auth0-blog/wab-docs) document to get more details on the signature, input, and response of each endpoint.