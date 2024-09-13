import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Sale from "./components/sale";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Popular from "./components/Popular";
import Footer from "./components/footer";



function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale></Sale>
            <Recommend></Recommend>
            <Topic></Topic>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}
export default App