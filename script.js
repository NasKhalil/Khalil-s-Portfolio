const btnOpen = document.querySelector('.nav-btn');
const btnClose = document.querySelector('.close-btn');
const menu = document.querySelector('.nav-items');
const menuItem = document.querySelectorAll('.menu-item');
const mainContainer = document.querySelector('main');

// const popupWindow = document.querySelector('.popup-window');
// const closePopupBtn = document.querySelector('.close-popup-btn');
// const popupTitle = document.querySelector('.popup-title');
const workSection = document.querySelector('#my-project');

const data = [
  {
    class: 'container',
    title: 'Tonic',
    company: 'Canopi',
    role: 'Backend dev',
    year: 2015,
    img: '/Media/Snapshoot-Portfolio-1.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
  },
  {
    class: 'container-reverse',
    title: 'Multi-Post Stories',
    company: 'Facebook',
    role: 'Backend dev',
    year: 2015,
    img: '/Media/Snapshoot-Portfolio-2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
  },
  {
    class: 'container',
    title: 'Facebook 360',
    company: 'Facebook',
    role: 'Backend dev',
    year: 2015,
    img: '/Media/Snapshoot-Portfolio-3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
  },
  {
    class: 'container-reverse',
    title: 'Uber Navigation',
    company: 'Uber',
    role: 'Backend dev',
    year: 2018,
    img: '/Media/Snapshoot-Portfolio-4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
  },
];

function openMenu() {
  btnClose.style.display = 'block';
  btnOpen.style.display = 'none';
  menu.style.display = 'block';
}

function closeMenu() {
  btnClose.style.display = 'none';
  btnOpen.style.display = 'block';
  menu.style.display = 'none';
}

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
menuItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// function closePopup() {
//   popupWindow.style.display = 'none';
// }

// closePopupBtn.addEventListener('click', closePopup);

data.forEach((item) => {
  const card = `
<div class=${item.class}>
<img
  class="snapshoot-img"
  src=".${item.img}"
  alt="Screenshot of the Multi-Post Stories project"
/>
<div class="container-description">
  <h2 class="project-title">${item.title}</h2>
  <div class="frame">
    <h3 class="client">${item.company}</h3>
    <img
      class="counter"
      src="./Media/Counter.png"
      alt="point image"
    />
    <h3 class="role">${item.role}</h3>
    <img
      class="counter1"
      src="./Media/Counter.png"
      alt="point image"
    />
    <h3 class="year">${item.year}</h3>
  </div>
  <p class="description">
   ${item.description}
  </p>
  <ul class="tags">
    <li class="tag-1 tag-style">${item.tags[0]}</li>
    <li class="tag-2 tag-style">${item.tags[1]}</li>
    <li class="tag-3 tag-style">${item.tags[2]}</li>
  </ul>
  <button class="project-button" type="button">See Project</button>
</div>
</div>
`;
  workSection.insertAdjacentHTML('afterbegin', card);

  const popup = `
<section class="popup-window">
<div class="popup-container">
  <div class="popup-header">
    <div>
      <h2 class="popup-title project-title">${item.title}</h2>
      <div class="frame">
        <h3 class="client">${item.company}</h3>
        <img
          class="counter"
          src="./Media/Counter.png"
          alt="point image"
        />
        <h3 class="role">${item.role}</h3>
        <img
          class="counter"
          src="./Media/Counter.png"
          alt="point image"
        />
        <h3 class="year">${item.year}</h3>
      </div>
    </div>
    <button class="close-popup-btn" type="button">
      <img src="./Media/close-popup-btn.png" alt="close button" />
    </button>
  </div>
  <img src=".${item.img}" alt="screenshot" class="popup-img" />
  <div class="popup-main">
    <p>${item.descriptionPopup}</p>
    <div class="popup-tech">
      <ul class="tags">
        <li class="tag-1 tag-style"></li>
        <li class="tag-2 tag-style"></li>
        <li class="tag-3 tag-style"></li>
        <li class="tag-4 tag-style"></li>
        <li class="tag-5 tag-style"></li>
        <li class="tag-6 tag-style"></li>
      </ul>
      <div class="popup-buttons">
        <button class="project-button" type="button">See live</button>
        <button class="project-button" type="button">See source</button>
      </div>
    </div>
  </div>
</div>
</section>
`;
  mainContainer.insertAdjacentHTML('beforeend', popup);

  const popupWindow = document.querySelector('.popup-window');
  const closePopupBtn = document.querySelector('.close-popup-btn');
  const popupBtn = document.querySelectorAll('.project-button');
  popupBtn.forEach((item) => {
    item.addEventListener('click', () => {
      popupWindow.style.display = 'block';
    });
  });
  closePopupBtn.addEventListener('click', () => {
    popupWindow.style.display = 'none';
  });
});
