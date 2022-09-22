const hamburgerEl = document.querySelector('.burger');
const cloXEl = document.querySelector('.X');
const barMobileListEl = document.querySelector('.bar-mobile-list');

const speakersArray = [
  {
    name: 'Ariel Camus',
    image: '/img/speakers/CEO png.jpg',
    qualification: 'CEO.Founder of MicroverseInc',
    about: 'Hi, become a remote software developer and is free until you get a job',
    alt: 'img of CEO',
  },
  {
    name: 'Grace Abike',
    image: '/img/speakers/G picture.jpg',
    qualification: 'Microverse Student',
    about: 'Hello, For me, it was a no-brainer. I wanted to try Microverse because while the alternatives would give you a tutorial or a course, you have to do it alone, but with this, I had the accountability',
    alt: 'img of Grace',
  },
  {
    name: 'David Alex',
    image: '/img/speakers/david.jpg',
    qualification: 'Full-Stack Developer at Doctolib',
    about: 'Hello, To be successful I knew I had to develop skills in planning, discipline, and productivity',
    alt: 'img of david',
  },
  {
    name: 'Grace Mark',
    image: '/img/speakers/G1.jpg',
    qualification: 'Senior Software Developer at Microsoft',
    about: 'Hello, Microverse provided the structure so I could grow in these areas, which prepared me for working in the software industry',
    alt: 'img of mark',
  },
  {
    name: 'Grace Gabriel',
    image: '/img/speakers/G3.jpg',
    qualification: 'Frontend Developer at Upstart',
    about: 'Hello, For me, it was a no-brainer. I wanted to try Microverse because while the alternatives would give you a tutorial or a course, you have to do it alone, but with this, I had the accountability',
    alt: 'img of gabriel',
  },
  {
    name: 'Grace luke',
    image: '/img/speakers/G2.jpg',
    qualification: 'Computer Engineering',
    about: 'Hello, Microverse provided the structure so I could grow in these areas, which prepared me for working in the software industry',
    alt: 'img of luke',
  },
];


const toggleNav = () => {
  hamburgerEl.addEventListener('click', () => {
    barMobileListEl.classList.add('show');
    hamburgerEl.classList.add('hide');
  });

  cloXEl.addEventListener('click', () => {
    barMobileListEl.classList.remove('show');
    hamburgerEl.classList.remove('hide');
  });
};

const speakers = document.querySelector('.speakers-items');
const speaker = () => {
  let markup = '';
  speakersArray.forEach((elem) => {
    markup += `<div class="speakers-item flex-row">
    <div class="speaker-image">
      <img src="${elem.image}" alt="${elem.alt}">
    </div>
    <div class="speaker flex-column">
      <h5 class="speaker-name">${elem.name}</h5>
      <h6 class="speaker-qualification">
      ${elem.qualification}
      </h6>
      <p class="speaker-about">
        <span>${elem.about.substring(0, 5)}</span>${elem.about.substring(5)}
      </p>
    </div>
  </div>`;
  });

  speakers.innerHTML = markup;
};

toggleNav();
speaker();