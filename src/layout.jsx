import { Outlet } from "react-router-dom";
import Header from './components/header'
// import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/footer";

const layout = () => {
    return (
        <>
            <Header />
            {/* <ScrollToTop /> */}
            <main className=" ">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default layout