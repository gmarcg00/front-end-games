import {useEffect, useState} from "react";

export const useGames = () => {
    const [games, setGames] = useState([]);
    const host = process.env.REACT_APP_GR_GAMES_HOST;
    const uri = process.env.REACT_APP_GR_GAMES_URI;
    const url = `https://${host}${uri}`;

    useEffect(() => {
        getGames().then(r => console.log("Games fetched"));
    },[])

    const getGames = async () => {
        const response = await fetch(url)
        const data = await response.json();
        setGames(data.data.slice(0,8));
    }

    return games;
}