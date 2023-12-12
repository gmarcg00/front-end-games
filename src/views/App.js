import '../App.css';
import {Header} from "../components/Header";
import {MainSection} from "../components/MainSection";
import {SingleGameSection} from "../components/SingleGameSection";
import {Footer} from "../components/Footer";


import {GamesSection} from "../components/GamesSection";
function App() {
  return (
    <div className="App">
        <Header/>
        <MainSection/>
        <GamesSection/>
        <SingleGameSection/>
        <Footer/>
    </div>
  );
}

export default App;
