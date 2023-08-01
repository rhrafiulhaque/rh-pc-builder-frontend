import Footer from "../UI/Shared/Footer";

const RootLayout = ({ children }) => {
    return (
        <>

            <div className="h-[100vh]">
                {children}
            </div>
            <Footer />
        </>
    );
};





export default RootLayout;