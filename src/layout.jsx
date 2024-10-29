import { Outlet } from "react-router-dom";
import Header from './components/header'
import Footer from "./components/footer";
import BottomSection from "./components/header/components/laptop/bottom-section";

const layout = () => {
    return (
        <>
            <Header />
            <BottomSection/>
            <main className=" pb-5 ">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default layout