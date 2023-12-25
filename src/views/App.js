
import {GamesContext} from "../context/GamesContext";
import {AvatarContext} from "../context/AvatarContext";
import {useGames} from "../hooks/useGames";
import {useAvatars} from "../hooks/useAvatars";
import {Router} from "../router/Router";

function App() {

    const games = useGames();
    const avatars = useAvatars();


    if (games.length > 0 && avatars.length > 0){
        return (
            <AvatarContext.Provider value={{avatars}}>
                <GamesContext.Provider value={{games}}>
                    <Router></Router>
                </GamesContext.Provider>
            </AvatarContext.Provider>
        );
    }
}

export default App;
