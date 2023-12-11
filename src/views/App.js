import '../App.css';
import {Header} from "../components/Header";
import {MainSection} from "../components/MainSection";
import {SingleGameSection} from "../components/SingleGameSection";
import {Footer} from "../components/Footer";


import {Games} from "../components/Games";
function App() {
  return (
    <div className="App">
        <Header/>
        <MainSection/>
        <Games/>
        <SingleGameSection/>
        <Footer/>
    </div>
  );
}

export default App;
