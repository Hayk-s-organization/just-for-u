import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { getProducts, getProductById, createProduct } from "../handler";

describe("Products", () => {
	describe("GET /products", () => {
		const context = {} as Context;
		afterEach(() => {
			jest.restoreAllMocks();
		});

		describe("getProducts - unit test", () => {
			it("should return all products", async () => {
				const event = { body: "Test Body" } as APIGatewayEvent;

				const response = (await getProducts(
					event,
					context,
					null
				)) as APIGatewayProxyResult;

				const responseBody = JSON.parse(response.body);
				expect(response.statusCode).toEqual(200);
				expect(responseBody.products.length).toEqual(6);
			});

			it("should return products which have 20 inventory", async () => {
				const event = { body: "Test Body", queryStringParameters: { inventory: '20' } } as unknown as APIGatewayEvent;

				const response = (await getProducts(
					event,
					context,
					null
				)) as APIGatewayProxyResult;

				const responseBody = JSON.parse(response.body);
				expect(response.statusCode).toEqual(200);
				expect(responseBody.products.some((product) => product.inventory !== 20)).toEqual(false);
			});
		});

		describe("getProductById - unit test", () => {
			it("should return a specific product by id", async () => {
				const event = {
					body: "Test Body",
					pathParameters: { productId: "6" },
				} as unknown as APIGatewayEvent;

				const response = (await getProductById(
					event,
					context,
					null
				)) as APIGatewayProxyResult;

				const responseBody = JSON.parse(response.body);
				expect(response.statusCode).toEqual(200);
				expect(responseBody.product).not.toBe(null);
				expect(responseBody.product.id).toEqual(6);
			});
		});
	});
});
