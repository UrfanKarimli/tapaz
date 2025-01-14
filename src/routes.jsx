import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Help from "./pages/help";
import Chosen from "./pages/chosen";
import Elanlar from "./pages/elanlar";
import AllVip from "./pages/elanlar/components/all-vip";
import Shops from "./pages/shop";
import NewAds from "./pages/new-ads";
import Detallar from "./pages/detallar";
import Messages from "./pages/messages";
import Profil from "./pages/profile";
import MyAds from "./pages/profile/components/my-ads";
import PersonalAcnt from "./pages/profile/components/personal-accout";
import Payments from "./pages/profile/components/payments";
import EditProfile from "./pages/profile/components/edit-profile";
import LimitedAds from "./pages/profile/components/ads-limit";
import MyBankCards from "./pages/profile/components/my-cards";
import TechPages from "./pages/tech-pages";
import TopQuestions from "./pages/tech-pages/components/top-questions";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profil />}>
                    <Route path="myads/:type?" element={<MyAds />} />
                    <Route path="transactions/:type?" element={<PersonalAcnt />} />
                    <Route path="payments/:type?" element={<Payments />} />
                    <Route path="edit/:type?" element={<EditProfile />} />
                    <Route path="ads-limit/:type?" element={<LimitedAds />} />
                    <Route path="may-cards/:type?" element={<MyBankCards />} />
                </Route>
                <Route path="/techpages" element={<TechPages />}>
                    <Route path="help" element={<TopQuestions />} />
                </Route>
                <Route path="/help/:type?/:id?" element={<Help />} />
                <Route path="/chosen" element={<Chosen />} />
                <Route path="/messages/:type?" element={<Messages />} />
                <Route path="/elanlar/:cate?/:subcate?/:id?" element={<Elanlar />} />
                <Route path="/elanlar/vip" element={<AllVip />} />
                <Route path="/elanlar/shop" element={<Shops />} />
                <Route path="/elanlar/new" element={<NewAds />} />
                <Route path="/elanlar/detallar/:category?/:subcategory?/:id?" element={<Detallar />} />
            </Route>
        </Route>,
    )
);