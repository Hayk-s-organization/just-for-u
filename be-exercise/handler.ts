import { APIGatewayEvent, APIGatewayProxyHandler } from "aws-lambda";
import products from './products.json';

const productsCollection = [...products];
export const getProducts: APIGatewayProxyHandler = async (
	event: APIGatewayEvent
) => {
	const { queryStringParameters } = event;
	let productsResponse = [];
	if (queryStringParameters && queryStringParameters.inventory) {
		productsResponse = productsCollection.filter((product) => {
			return product.inventory === Number(queryStringParameters.inventory);
		});
	} else {
		productsResponse = productsCollection;
	}
	return {
		statusCode: 200,
		body: JSON.stringify({
			products: productsResponse,
		}),
	};
};

export const getProductById: APIGatewayProxyHandler = async (event) => {
	const product = products.find(item => item.id === Number(event.pathParameters.productId));
	if (!product) {
		return {
			statusCode: 404,
			body: null,
		};
	}
	return {
		statusCode: 200,
			body: JSON.stringify({
			product,
		}),
	};
};

export const createProduct: APIGatewayProxyHandler = async () => {
	return {} as any;
};
