import {useEffect, useState} from "react";

export const useAvatars = () => {
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        setAvatars([
            {id: "1", name: "Elie - The Last Of Us", price: "1.0", backgroundImage:"../images/ellie.jpg"},
            {id: "2", name: "Elie - The Last Of Us", price: "1.0", backgroundImage:"https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"},
            {id: "3", name: "Elie - The Last Of Us", price: "1.0", backgroundImage:"https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"},
            {id: "4", name: "Elie - The Last Of Us", price: "1.0", backgroundImage:"https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"},
            {id: "5", name: "Elie - The Last Of Us", price: "1.0", backgroundImage:"https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"}
        ]);
    },[])
    return avatars;
}