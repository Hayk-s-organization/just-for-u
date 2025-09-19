import React, {useEffect, useState} from "react";
import "./App.css";
import ProductDetails, {Product} from "./ProductDetails";

const App: React.FC = () => {
	const [productId, setProductId] = useState<number | null>(null);
	const [fetching, setFetching] = useState<boolean>(false);
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		handleFetchProduct();
	}, [productId]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10);
		setProductId(value);
	};

	const handleFetchProduct = () => {
		if (productId) {
			setFetching(true);
			fetch(`http://localhost:4000/product/${productId}`).then(async (res) => {
				const { statusCode, product } = await res.json();
				if (statusCode >= 200) {
					setProduct(product);
				}
			}).finally(() => setFetching(false));
		}
	};

	return (
		<div className="App">
			<div className="App-header-small">
				<h1>Reflaunt Product</h1>
			</div>
			<div className="App-form">
				<input
					type="number"
					value={productId || ""}
					onChange={handleInputChange}
				/>

				<br></br>
				<br></br>

				<button onClick={handleFetchProduct}>Fetch Product</button>
			</div>
			{fetching && productId && product && <ProductDetails productId={productId} product={product} />}
			{/*{productId && fetching && !product && <ProductNotFound/>}*/}
		</div>
	);
};

export default App;
