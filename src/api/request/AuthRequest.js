
export const signUp = ({name,email,username,password,firstSurname,secondSurname}) => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_USERS_HOST;
        const uri = process.env.REACT_APP_GR_USERS_SIGNUP_URI;
        const url = `https://${host}${uri}`;
        const requestBody = {
            "name": name,
            "email": email,
            "username": username,
            "password": password,
            "first_surname": firstSurname,
            "second_surname": secondSurname,
            "birthday": "2000-02-02"
        };

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

export const login = (username,password) => {
    return new Promise((resolve, reject) => {
        const host = process.env.REACT_APP_GR_USERS_HOST;
        const uri = process.env.REACT_APP_GR_USERS_LOGIN_URI;
        const url = `https://${host}${uri}`;
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
        const url = `https://${host}${uri}`;

        const options = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem("loggedUser")).access_token
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