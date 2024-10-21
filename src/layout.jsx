import { Outlet } from "react-router-dom";
import Header from './components/header'
import Footer from "./components/footer";

const layout = () => {
    return (
        <>
            <Header />
            <main className="  ">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default layout