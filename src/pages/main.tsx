import Footer from "@/components/Footer/footer"
import Form from "@/components/Main/main";
import Navbar from "@/components/Navbar/navbar";

// =============== The main comoponent which is loaded on /main route. ========================
const Main = (props:any) => {

    return <>
    <Navbar/>
    <Form/>
    <Footer/>
    </>

}

export default Main;