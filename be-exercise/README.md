# Product Service API

This is a serverless service built using the Serverless Framework. The main purpose of this service is to provide a basic implementation of a product API that will be used as part of a pair programming exercise during the interview process.

## Getting Started

To get started with the project, clone the repository and run `npm install` to install the required dependencies.

You can run the service locally using `npm start`, and run tests using `npm test`.

## Pair Programming Exercise

During the interview, your code exercise will be to update the routes for `getProducts`, where we should return all products, and `getProductById` where we should return a single product given its ID.

The `products.json` file contains the product data that will be used for testing. The existing tests will ensure that your implementation returns the correct results.

Your main goal during the exercise is to demonstrate your problem-solving skills and your ability to write clean, maintainable code. We encourage you to share your thought process and ask questions during the exercise.

Good luck, and have fun!

## Routes

This API provides two routes:

- `GET /products` - Returns all products
- `GET /products/{productId}` - Returns the product with the specified ID

## Tests

There are already some base tests implemented for getProduct and getProductById functions. The tests ensure that all products are returned, that products can be filtered by status, and that the correct product is returned when searching by ID.

## Bonus

- Adding a filter to `getProducts`
  In addition to returning all products, the `getProducts` route should also support filtering products by their inventory status.

- Handling product not found in `getProductById`
  When a client requests a product with an ID that does not exist in our data, the `getProductById` route should return a XXX HTTP response to indicate that the resource was not found
