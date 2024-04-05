import {useEffect, useState} from "react";


export const useAvatars = () => {
    const [avatars, setAvatars] = useState([]);
    const host = process.env.REACT_APP_GR_GAMES_HOST;
    const uri = process.env.REACT_APP_GR_GAMES_AVATARS_URI;
    const url = `https://${host}${uri}`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAvatars(data.data))
    },[])

    return avatars;
}