
export const randomGame = () => {
    return new Promise((resolve,reject)=> {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_RANDOM_GAME_URI;
        const url = `https://${host}${uri}`;

        fetch(url)
            .then((response) => {
                resolve(response)
            })
            .catch(() => {
                reject("error-connection")
            })
    });
}


export const getGames = () => {
    return new Promise ((resolve,reject) => {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_URI;
        const url = `https://${host}${uri}`;

        fetch(url)
            .then((response) => {
                resolve(response)
            })
            .catch(() => {
                reject("error-connection")
            })
    });
}