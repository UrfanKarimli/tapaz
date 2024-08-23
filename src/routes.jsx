import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import Layout from "./layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<Layout />} >
            
            </Route>
        </Route>,
    ),
);