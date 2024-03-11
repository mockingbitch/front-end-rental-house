import HeaderSignIn from "../../components/Header/HeaderSignIn";
import Footer from "../../components/Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <HeaderSignIn />
                <main>
                    { children }
                </main>
            {/* <Footer/> */}
        </>
    );
}

export default Layout;