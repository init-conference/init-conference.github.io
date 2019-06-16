// Main JavaScript file
(function () {
  // smooth scroll
  scrollTo();

  // Responsive menu
  const mobileMenuOpener = document.getElementById('mobileMenuOpener');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuOpener.addEventListener('click', function(e){
    e.preventDefault();
    if(this.classList.contains('active')) {
      this.classList.remove('active');
      mobileMenu.style.display = "none";
    } else {
      this.classList.add('active');
      mobileMenu.style.display = "block";
    }
  })

  // Sticky menu
  const section = document.getElementById('about');
  const nav = document.getElementById('js--sticky-nav');
  window.addEventListener('scroll', (event) => {
    const fromTop = window.scrollY;
    if (section.offsetTop - 150 <= fromTop) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });

  window.addEventListener('scroll', (event) => {
    const menuLinks = document.querySelectorAll('.menu__item__link');
    menuLinks.forEach((link) => {
      const id = document.getElementById(link.getAttribute('href').substr(1));
      const elPosition = id.offsetTop - 155;
      if (window.scrollY > elPosition && window.scrollY < elPosition + id.offsetHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
}());

function scrollTo() {
  const links = document.querySelectorAll('.scrollTo');
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const menuLinks = document.querySelectorAll('.menu__item__link');
  menuLinks.forEach(link => link.classList.remove('active'));
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  const targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop - 150, left: 0, behavior: 'smooth' });
  this.classList.add('active');
  window.history.pushState('', '', targetID);
}

