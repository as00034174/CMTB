export const itemService = {
    addNewItem,
    getAllItem,
    // getItem,
    // getItems
    handelFileUpload,
}

const url = 'http://localhost:5000/api';

function addNewItem(item) {
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    };
    return fetch(`${url}/addNewDetail`, requestOptions)
        .then(handelRespone);
};

function getAllItem() {
    const requestOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'Application/json'
        },
    }
    return fetch(`${url}/getAllCizenDetail`, requestOptions)
        .then(handelRespone);
}

function handelFileUpload(file) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
        body: file
        },
    }
    return fetch(`${url}/uploadFile`, requestOptions);


}

function handelRespone(response) {
    return response.text().then(text => {
        const data = text && JSON.stringify(text);
        if (!response.ok) {
            if (response.status === 401)
                console.log("Error 401");
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}