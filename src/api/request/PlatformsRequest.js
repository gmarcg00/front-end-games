
export const getPlatforms = () => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_PLATFORMS;
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


export const addPlatforms = (platformsIds) => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_USERS_URI;
        const url = `https://${host}${uri}/1/platforms`;

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(platformsIds)
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