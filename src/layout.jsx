import { Outlet } from "react-router-dom";
import Header from './components/header'
import ScrollToTop from "./components/scrollToTop";

const layout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default layout