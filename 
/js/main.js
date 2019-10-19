// Main JavaScript file
(function () {
  // smooth scroll
  scrollTo();

  // Jobs section
  function toggleItem() {
    const itemClass = this.parentNode.className;
    if (itemClass === 'job-accordion__item job-accordion__item--open') {
      this.parentNode.className = 'job-accordion__item';
    } else {
      this.parentNode.className = 'job-accordion__item job-accordion__item--open';
    }
  }
  const jobPositions = document.querySelectorAll('.job-position');
  jobPositions.forEach((position) => {
    position.addEventListener('click', toggleItem, false);
  });

  // Responsive menu
  const mobileMenuOpener = document.getElementById('mobileMenuOpener');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuOpener.addEventListener('click', function (e) {
    e.preventDefault();
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      mobileMenu.style.display = 'none';
    } else {
      this.classList.add('active');
      mobileMenu.style.display = 'block';
    }
  });

  // Sticky menu
  const section = document.getElementById('about');
  const nav = document.getElementById('js--sticky-nav');
  window.addEventListener('scroll', (event) => {
    if (!section) {
      return;
    }
    const fromTop = window.scrollY;
    if (section.offsetTop - 150 <= fromTop) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }

    const menuLinks = document.querySelectorAll('.menu__item__link');
    menuLinks.forEach((link) => {
      const id = document.getElementById(link.getAttribute('href').split('#')[1]);

      if (!id) {
        return;
      }

      const elPosition = id.offsetTop - 155;

      if (window.scrollY > elPosition && window.scrollY < elPosition + id.offsetHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  if (document.getElementById('_amiandoIFrame3789395')) {
    let last_iframe_height = 0;
    setInterval(() => {
      const iframe = document.getElementById('_amiandoIFrame3789395');
      if (last_iframe_height <= 0) {
        last_iframe_height = iframe.clientHeight;
      } else if (last_iframe_height != iframe.clientHeight) {
        last_iframe_height = iframe.clientHeight;
        iframe.scrollIntoView();
      }
    }, 200);
  }
}());

function scrollTo() {
  const links = document.querySelectorAll('.home .scrollTo');
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  if (window.innerWidth < 768) {
    document.getElementById('mobileMenuOpener').classList.remove('active');
    document.getElementById('mobileMenu').style.display = 'none';
  }
  const menuLinks = document.querySelectorAll('.menu__item__link');
  menuLinks.forEach(link => link.classList.remove('active'));
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  const targetID = respond
    ? respond.getAttribute('href')
    : `#${this.getAttribute('href').split('#')[1]}`;
  console.log(targetID);
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop - 150, left: 0, behavior: 'smooth' });
  this.classList.add('active');
  window.history.pushState('', '', targetID);
}
