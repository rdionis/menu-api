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
<br/>
<br/>


# Implement Express Error Handling
In Express, the order in which you declare and invoke middleware is essential for the architecture of your application. What should happen when a client makes a server request that doesn't match any server routes? The ideal behavior is to respond to the client with a 400 Bad Request status code.

A good way to handle this is to create an HttpException class that helps you encapsulate errors related to HTTP requests and a middleware function to help you manage and issue the error response.

It's important to note that you must provide four arguments to identify a function as an error-handling middleware function in Express. You must specify the next object to maintain the error-handling signature even if you don't use it. Otherwise, Express interprets the next object as a regular middleware function, and it won't handle any errors.

Now, also consider that the condition of a route not existing is not considered an error by Express when you use the framework to build a RESTful API. The REST architecture model uses HTTP status codes to respond to the client. A missing resource should not be an error but a condition you need to report to the client.

As such, Express won't call your errorHandler middleware function if you request the employees resource, for example.

To customize how your app responds to undefined resources, create an additional middleware function to catch 404 conditions. 