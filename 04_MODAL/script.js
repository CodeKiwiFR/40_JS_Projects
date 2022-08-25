/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const randomButtonElement = document.getElementById('randomButton');
const backdropElement = document.getElementById('backdrop');
const personCardElement = document.getElementById('personCard');
const personCardLoaderElement = personCardElement.querySelector('#personCardLoader');
const personCardCloseButtonElement = personCardElement.querySelector('#personCardCloseButton');
const personCardDetailsElement = personCardElement.querySelector('#personCardDetails');
const personAvatarElement = personCardDetailsElement.querySelector('#personAvatar');
const personNameElement = personCardDetailsElement.querySelector('#personName');
const personEmailElement = personCardDetailsElement.querySelector('#personEmail');
const personJobElement = personCardDetailsElement.querySelector('#personJob');
const personPhoneElement = personCardDetailsElement.querySelector('#personPhone');

const apiURL = 'https://random-data-api.com/api/v2/users';

/* ************************************************** */
/* Function definitions */
/* ************************************************** */
const randomButtonHandler = (event) => {
    for (const element of [personCardElement, backdropElement]) {
        element.classList.add('modalOpened');
    }

    fetch(apiURL)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw 'Request failed';
            }
        })
        .then((response) => {
            personAvatarElement.src = response.avatar;
            personNameElement.textContent = response.first_name + ' ' + response.last_name;
            personEmailElement.textContent = response.email;
            personJobElement.textContent = response.employment.title;
            personPhoneElement.textContent = response.phone_number;
            
            for (const element of [personCardDetailsElement, personCardLoaderElement]) {
                element.classList.add('loadedUser');
            }
        })
        .catch((error) => console.log('Error: ' + error));
};

const closeModalHandler = (event) => {
    for (const element of [personCardElement, backdropElement]) {
        element.classList.remove('modalOpened');
    }
    for (const element of [personCardDetailsElement, personCardLoaderElement]) {
        element.classList.remove('loadedUser');
    }
}

/* ************************************************** */
/* Main program */
/* ************************************************** */
randomButtonElement.addEventListener('click', randomButtonHandler);
backdropElement.addEventListener('click', closeModalHandler);
personCardCloseButtonElement.addEventListener('click', closeModalHandler);