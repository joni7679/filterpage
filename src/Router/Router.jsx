import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductDetails from "../Components/ProductsDetails/ProductDetails";

export let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/productDetails/:id",
        element: <ProductDetails />,
    }
])