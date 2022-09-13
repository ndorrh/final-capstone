const hamburger = document.getElementById('button');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const openBtnClassList = openBtn.classList;
const speaker = document.getElementById('speakers');
const speakersection2 = document.getElementById('speakersection2');
const speakers = [
  {
    id: 1,
    name: 'Ndorrh Oswald',
    information: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    aboutSpeaker: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    speakerImage: 'images/speaker_01.png',
  },

  {
    id: 2,
    name: 'Yachai Benkler',
    information: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    aboutSpeaker: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    speakerImage: 'images/speaker_02.png',
  },

  {
    id: 3,
    name: 'Ndorrh Oswald',
    information: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    aboutSpeaker: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    speakerImage: 'images/speaker_03.png',
  },

  {
    id: 4,
    name: 'Ndorrh Oswald',
    information: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    aboutSpeaker: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    speakerImage: 'images/speaker_04.png',
  },

  {
    id: 5,
    name: 'Ndorrh Oswald',
    information: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    aboutSpeaker: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    speakerImage: 'images/speaker_05.png',
  },

  {
    id: 6,
    name: 'Ndorrh Oswald',
    information: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    aboutSpeaker: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    speakerImage: 'images/speaker_02.png',
  },
];
hamburger.addEventListener('click', () => {
  if (openBtnClassList.contains('d-none')) {
    openBtn.classList.remove('d-none');
    closeBtn.classList.add('d-none');
  } else {
    openBtn.classList.add('d-none');
    closeBtn.classList.remove('d-none');
  }
});

const createElementWithClassName = (elem, className) => {
  const element = document.createElement(`${elem}`);
  element.className = `${className}`;
  return element;
};

const addInnerHtmlAndApendToParent = (text, parent, child) => {
  child.innerHTML = `${text}`;
  parent.appendChild(child);
  return parent;
};

const addimage = (link, alternteText, classname) => {
  const image = document.createElement('img');
  image.src = link;
  image.alt = alternteText;
  image.className = classname;
  return image;
};

const futuredSpeakers = createElementWithClassName('div', 'heading container-fluid d-flex justify-content-center flex-column align-items-center my-4');

addInnerHtmlAndApendToParent('', speaker, futuredSpeakers);
const heading = createElementWithClassName('h3', 'heading-secondary container-fluid text-center');
addInnerHtmlAndApendToParent('Featured Speakers', futuredSpeakers, heading);
const spanHeading = createElementWithClassName('span', 'line');
addInnerHtmlAndApendToParent('', futuredSpeakers, spanHeading);
const speakersConatiner = createElementWithClassName('div', 'row');
addInnerHtmlAndApendToParent('', speaker, speakersConatiner);

speakers.forEach((person) => {
  const speakerImage = createElementWithClassName('div', 'card container-fluid d-flex flex-row border-0 col-md-6');
  const infoContainer = createElementWithClassName('div', 'card-body w-75 d-flex flex-column gap-2');
  const speakerName = createElementWithClassName('h5', 'card-title');
  const speakerinfo = createElementWithClassName('p', 'card-text text-danger mb-0');
  const span = createElementWithClassName('span', 'line');
  const speakerDetails = createElementWithClassName('p', 'card-text');

  const appendElementsToparent = (mainContainer) => {
    addInnerHtmlAndApendToParent('', mainContainer, speakerImage);
    addInnerHtmlAndApendToParent('', speakerImage, addimage(`${speakers[speakers.indexOf(person)].speakerImage}`, 'Ndorrh Oswald speaker', 'card-img-top speakers w-25'));
    addInnerHtmlAndApendToParent('', speakerImage, infoContainer);
    addInnerHtmlAndApendToParent(`${speakers[speakers.indexOf(person)].name}`, infoContainer, speakerName);
    addInnerHtmlAndApendToParent(`${speakers[speakers.indexOf(person)].information}`, infoContainer, speakerinfo);
    addInnerHtmlAndApendToParent('', infoContainer, span);
    addInnerHtmlAndApendToParent(`${speakers[speakers.indexOf(person)].aboutSpeaker}`, infoContainer, speakerDetails);
  };

  if (speakers[speakers.indexOf(person)].id <= 2) {
    appendElementsToparent(speakersConatiner);
  } else {
    appendElementsToparent(speakersection2);
  }
});
