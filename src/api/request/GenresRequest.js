
export const getGenres = () => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_GENRES;
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

export const addGenres = (genresIds) => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_USERS_URI;
        const url = `https://${host}${uri}/1/genres`;

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(genresIds)
        };

        fetch(url,options)
            .then((response) => {
                resolve(response)
            })
            .catch(() => {
                reject("error-connection")
            })
    });
}