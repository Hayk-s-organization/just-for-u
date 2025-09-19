import React from "react";

export interface Product {
	id: number;
	name: string;
	price: number;
	[x: string]: string | number | unknown;
}

interface ProductProps {
	productId: number;
	product: Product;
}

const ProductDetails: React.FC<ProductProps> = ({ productId, product }) => {
	// TODO: Get product data based on productId

	return <div>
		<div>{product.id}</div>
		<div>{product.name}</div>
		<div>{product.price}</div>
	</div>;
};

export default ProductDetails;
