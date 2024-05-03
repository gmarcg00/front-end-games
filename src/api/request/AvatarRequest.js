
export const initAvatars = () => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_AVATARS_INIT_URI;
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

export const getAvatars = () => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_AVATARS_URI;
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

export const assignAvatar = (avatarId) => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_GAMES_HOST;
        const uri = process.env.REACT_APP_GR_GAMES_USERS_URI;
        const url = `https://${host}${uri}/1/avatars/${avatarId}`;
        const requestBody = {"operation": "ADD_FIRST"};

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
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