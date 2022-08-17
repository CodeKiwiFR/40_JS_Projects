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
    './src/person-1_rfzshl.jpg'
  ),
  new Person(
    'Anna Johnson',
    'Web Designer',
    'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    './src/person-2_np9x5l.jpg'
  ),
  new Person(
    'Peter Jones',
    'Intern',
    'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    './src/person-3_ipa0mj.jpg'
  ),
  new Person(
    'Bill Anderson',
    'The Boss',
    'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    './src/person-4_t9nxjt.jpg'
  ),
];

const personCardElement = document.getElementById('personCard');
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
const testFunction = (event) => {
    console.log('test');
};

/* ************************************************** */
/* Main program */
/* ************************************************** */
previousButton.addEventListener('click', testFunction);
nextButton.addEventListener('click', testFunction);
randomButton.addEventListener('click', testFunction);