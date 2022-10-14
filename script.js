// --------------- header ---------------
const icons = document.querySelector('.icons');
const navbar = document.querySelector('.navbar');
const sharePost = document.querySelector('.share-post');
const contactInfo = document.querySelector('.contact-info');

icons.addEventListener('click', e => {
  if (e.target.classList.contains('info-btn')) {
    contactInfo.classList.toggle('active');
    sharePost.classList.remove('active');
    navbar.classList.remove('active'); 
  }
  if (e.target.classList.contains('share-btn')) {
    sharePost.classList.toggle('active');
    navbar.classList.remove('active');
    contactInfo.classList.remove('active'); 
  }
  if (e.target.classList.contains('menu-btn')) {
    navbar.classList.toggle('active');
    sharePost.classList.remove('active');
    contactInfo.classList.remove('active'); 
  }
});

window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  sharePost.classList.remove('active');
  contactInfo.classList.remove('active');
});

window.addEventListener('click', e => {
  if ( !(e.target.classList.contains('info-btn')) && !(e.target.classList.contains('share-btn')) && !(e.target.classList.contains('menu-btn'))) {
    navbar.classList.remove('active');
    sharePost.classList.remove('active');
    contactInfo.classList.remove('active');
  }
});

const overlay = document.querySelectorAll('.overlay');
overlay.forEach( o => {
  o.addEventListener('click', e => {
    if ( !(e.target.classList.contains('box-modal')) ) {
      navbar.classList.remove('active');
      sharePost.classList.remove('active');
      contactInfo.classList.remove('active');
    }
  })
});

// --------------- beranda ---------------
var swiper = new Swiper(".beranda-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
  delay: 5000,
  },
});

// --------------- proyek ---------------
var swiper = new Swiper(".proyek-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

// --------------- klien mitra ---------------
var swiper = new Swiper(".klien .mitra-slider", {
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

// --------------- klien review ---------------
var swiper = new Swiper(".klien .testi-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    840: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

// klien faq
const quest = document.querySelectorAll(".quest");
quest.forEach( q => {
  q.addEventListener('click', () => {
    q.classList.toggle("active");
    const reply = q.nextElementSibling;
    if (reply.style.maxHeight) {
      reply.style.maxHeight = null;
    }
    else {
      reply.style.maxHeight = reply.scrollHeight + "px";
      console.log(reply.scrollHeight);
    } 
  });
});