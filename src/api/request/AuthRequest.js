
export const signUp = () => {}

export const login = (username,password) => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_USERS_HOST;
        const uri = process.env.REACT_APP_GR_USERS_LOGIN_URI;
        const url = `http://${host}${uri}`;
        const requestBody = {"username": username, "password": password};

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        };

        fetch(url, options)
            .then((response) => {
                resolve(response)
            })
            .catch(() => {
                reject("error-connection")
            })
    });
}

export const logout = () => {
    return new Promise ((resolve, reject) => {
        const host = process.env.REACT_APP_GR_USERS_HOST;
        const uri = process.env.REACT_APP_GR_USERS_LOGOUT_URI;
        const url = `http://${host}${uri}`;

        const options = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("loggedUser")).token
            },
        };

        fetch(url, options)
            .then((response) => {
                resolve(response)
            })
            .catch(() => {
                reject("error-connection")
            })
    });

}