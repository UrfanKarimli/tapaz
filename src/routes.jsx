import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Help from "./pages/help";
import Chosen from "./pages/chosen";
import Elanlar from "./pages/elanlar";
import AllVip from "./pages/elanlar/components/all-vip";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/help/:type?/:id?" element={<Help/>} />
                <Route path="/chosen" element={<Chosen/>}/>
                <Route path="/elanlar/:cate?/:subcate?/:items?/:id?" element={<Elanlar/>}/>
                <Route path="/elanlar/vip" element={<AllVip/>}/>
            </Route>
            
        </Route>,
    ),
);