/* ************************************************** */
/* Class definitions */
/* ************************************************** */

/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const randomButtonElement = document.getElementById('randomButton');
const apiURL = 'https://random-data-api.com/api/v2/users';

/* ************************************************** */
/* Function definitions */
/* ************************************************** */
const randomButtonHandler = (event) => {
    fetch(apiURL)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw 'Request failed';
            }
        })
        .then((response) => {
            console.log(response);
            console.log(response.avatar);
            console.log(response.first_name);
            console.log(response.last_name);
            console.log(response.email);
            console.log(response.employment.title);
            console.log(response.phone_number);
        })
        .catch((error) => console.log('Error: ' + error));
};

/* ************************************************** */
/* Main program */
/* ************************************************** */
randomButtonElement.addEventListener('click', randomButtonHandler);
