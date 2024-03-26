import {AvatarContext} from "../context/AvatarContext";
import {GamesContext} from "../context/GamesContext";
import {useAvatars} from "../hooks/useAvatars";
import {useGames} from "../hooks/useGames";
import {Router} from "../router/Router";

function App() {
    const avatars = useAvatars();
    const games = useGames();

    return (
        <AvatarContext.Provider value={{avatars}}>
            <GamesContext.Provider value={{games}}>
                <Router></Router>
            </GamesContext.Provider>
        </AvatarContext.Provider>
    );

}

export default App;
