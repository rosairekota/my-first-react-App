import "./assets/css/App.css";
import "./assets/css/rkota-grid.css";
import CardContainer from "./components/card/card-container";
import TopSection from "./components/layouts/header";


const App = () => {
    return (
       
        <>
        <TopSection/>
         <main className="container row">
                <CardContainer className="medium-col-12" />        
         </main>
        </>
        
    )
}
export default App;