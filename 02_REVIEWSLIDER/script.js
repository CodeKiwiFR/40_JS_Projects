/* ************************************************** */
/* Class definitions */
/* ************************************************** */
class Person {
    constructor(name, job, description, imageURL) {
        this.name = name;
        this.job = job;
        this.description = description;
        this.imageURL = imageURL;
    }
}

/* ************************************************** */
/* Variable definitions */
/* ************************************************** */
const persons = [
    new Person(
        'Susan Smith',
        'Web Developer',
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        'url(./src/person-1_rfzshl.jpg)'
    ),
    new Person(
        'Anna Johnson',
        'Web Designer',
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        'url(./src/person-2_np9x5l.jpg)'
    ),
    new Person(
        'Peter Jones',
        'Intern',
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        'url(./src/person-3_ipa0mj.jpg)'
    ),
    new Person(
        'Bill Anderson',
        'The Boss',
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
        'url(./src/person-4_t9nxjt.jpg)'
    ),
];

let selectedPersonIndex;
const personCardElement = document.getElementById('personCard');
const personCardLoaderElement = personCardElement.querySelector('#personCardLoader');
const personTileElement = personCardElement.querySelector('#personTile');
const personCardImageElement = personCardElement.querySelector('#personCardImage');
const personCardNameElement = personCardElement.querySelector('#personCardName');
const personCardJobElement = personCardElement.querySelector('#personCardJob');
const personCardDescriptionElement = personCardElement.querySelector('#personCardDescription');
const previousButton = personCardElement.querySelector('#previousButton');
const nextButton = personCardElement.querySelector('#nextButton');
const randomButton = personCardElement.querySelector('#randomButton');

/* ************************************************** */
/* Function definitions */
/* ************************************************** */

// Initialize the page by setting the initial index and triggering the first animation
const intializePage = () => {
    selectedPersonIndex = 0;
    loaderTransitionAnimation(persons[selectedPersonIndex]);
};

// Transition when displaying a person: loader appears, tile is hidden then a timeout make us wait for next person to display
const loaderTransitionAnimation = (selectedPerson, delay = 1000) => {
    personCardLoaderElement.style.display = 'block';
    personTileElement.style.display = 'none';
    setTimeout(makeAppearPerson.bind(undefined, selectedPerson), delay);
};

// Putting person information into tile, hide loader and reveal tile
const makeAppearPerson = (selectedPerson) => {
    displayPerson(selectedPerson);
    personCardLoaderElement.style.display = 'none';
    personTileElement.style.display = 'flex';
};

// Display the person given as argument and display it on the DOM
const displayPerson = (selectedPerson) => {
    personCardNameElement.textContent = selectedPerson.name;
    personCardJobElement.textContent = selectedPerson.job;
    personCardDescriptionElement.textContent = selectedPerson.description;
    personCardImageElement.style.backgroundImage = selectedPerson.imageURL;
};

// Select the previous person in persons array and display it
const selectPreviousPerson = (event) => {
    selectedPersonIndex--;
    if (selectedPersonIndex < 0) {
        selectedPersonIndex = persons.length - 1;
    }
    loaderTransitionAnimation(persons[selectedPersonIndex], 250);
};

// Select the next person in persons array and display it
const selectNextPerson = (event) => {
    selectedPersonIndex = (selectedPersonIndex + 1) % persons.length;
    loaderTransitionAnimation(persons[selectedPersonIndex], 250);
};

// Select a random index in persons array and display the selected one
const selectRandomPerson = (event) => {
    let previousPersonIndex = selectedPersonIndex;
    while (previousPersonIndex === selectedPersonIndex) {
        selectedPersonIndex = Math.floor(Math.random() * persons.length);
    }
    loaderTransitionAnimation(persons[selectedPersonIndex], 250);
};

/* ************************************************** */
/* Main program */
/* ************************************************** */

// Event listeners
previousButton.addEventListener('click', selectPreviousPerson);
nextButton.addEventListener('click', selectNextPerson);
randomButton.addEventListener('click', selectRandomPerson);

intializePage();
