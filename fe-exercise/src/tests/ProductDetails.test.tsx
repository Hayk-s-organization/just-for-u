import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ProductDetails from "../ProductDetails";

describe("ProductDetails", () => {
	it("should get product by id", async () => {
		const productId = 1;

		render(<ProductDetails productId={productId} />);

		await waitFor(() => {
			expect(screen.getByText("Product Details")).toBeInTheDocument();
		});

		await waitFor(() => {
			expect(screen.getByText(`ID: ${productId}`)).toBeInTheDocument();
		});
	});

	it("should show expected message when product is not found", async () => {
		const productId = 999;

		render(<ProductDetails productId={productId} />);

		await waitFor(() => {
			expect(screen.getByText("Product Details")).toBeInTheDocument();
		});

		await waitFor(() => {
			expect(screen.getByText("Product not found.")).toBeInTheDocument();
		});
	});
});
