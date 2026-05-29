// ===== DYNAMIC HEADER AND FOOTER TEMPLATES =====
const headerTemplate = `
  <!-- TOP HIGHLIGHTS STRIP -->
  <div class="banner-strip">
    Ortulex Law Firm – High-Caliber Legal Advisory in Delhi Since 2023 – Request a Free Consultation
  </div>

  <!-- FIXED NAVBAR -->
  <nav id="navbar">
    <div class="nav-inner">
      <a class="nav-logo" href="./">
        <img src="images/logo.png" alt="Ortulex Emblem Logo">
      </a>
      
      <ul class="nav-links">
        <li><a href="./">Home</a></li>
        <li><a href="about">About Us</a></li>
        <li><a href="practices">Practice Areas</a></li>
        <li><a href="team">Our Team</a></li>
        <li><a href="why">Why Ortulex</a></li>
        <li><a class="nav-cta" href="consultation">Consultation</a></li>
      </ul>

      <div class="hamburger" onclick="toggleMobileMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <!-- MOBILE MENU DROPDOWN -->
  <div class="mobile-menu" id="mobile-menu">
    <ul>
      <li><a href="./">Home</a></li>
      <li><a href="about">About Us</a></li>
      <li><a href="practices">Practice Areas</a></li>
      <li><a href="team">Our Team</a></li>
      <li><a href="why">Why Ortulex</a></li>
      <li><a class="nav-cta" style="text-align: center; margin-top: 10px;" href="consultation">Consultation</a></li>
    </ul>
  </div>
`;

const footerTemplate = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="images/logo.png" alt="Ortulex Footer Logo">
          <p>Full-service premium law firm based in Rohini, New Delhi. Advising corporate startups, firms, and individuals since 2023.</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h5>Quick Nav</h5>
          <ul>
            <li><a href="./">Home Page</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="practices">Practice Areas</a></li>
            <li><a href="team">Our Team</a></li>
            <li><a href="why">Why Ortulex</a></li>
            <li><a href="consultation">Consultation</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Practice Areas</h5>
          <ul>
            <li><a href="practices">Corporate Law</a></li>
            <li><a href="practices">Criminal Defense</a></li>
            <li><a href="practices">Matrimonial Disputes</a></li>
            <li><a href="practices">Civil Recovery</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Litigation Forums</h5>
          <ul>
            <li>Supreme Court of India</li>
            <li>Delhi High Court</li>
            <li>Company Law Tribunal</li>
            <li>District & Family Courts</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Ortulex Law Firm. All Rights Reserved. Delhi, India.</p>
        <p>Strategic Design & Managed by <a href="https://gautamstack.com/" target="_blank" style="color: var(--gold);">Gautamstack Digital</a></p>
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP BUTTON -->
  <a href="https://wa.me/919034084323" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  </a>
`;

function loadHeaderFooter() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerTemplate;
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerTemplate;
  }
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar && window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else if (navbar) {
    navbar.classList.remove('scrolled');
  }
});

// ===== DYNAMIC ACTIVE NAV LINKS =====
document.addEventListener('DOMContentLoaded', () => {
  // Load templates first
  loadHeaderFooter();

  // If running locally via file:// protocol, append .html to pretty links and rewrite './' to 'index.html' so links work without a local server
  if (window.location.protocol === 'file:') {
    const allLinks = document.querySelectorAll('a[href]');
    allLinks.forEach(link => {
      let href = link.getAttribute('href');
      if (href) {
        if (href === './' || href === '/') {
          link.setAttribute('href', 'index.html');
        } else if (
          !href.startsWith('http') &&
          !href.startsWith('//') &&
          !href.startsWith('#') &&
          !href.startsWith('mailto:') &&
          !href.startsWith('tel:') &&
          !href.endsWith('.html') &&
          !href.includes('.')
        ) {
          link.setAttribute('href', href + '.html');
        }
      }
    });
  }

  const currentPath = window.location.pathname;
  const cleanPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
  let pageName = cleanPath.substring(cleanPath.lastIndexOf('/') + 1) || 'index';
  pageName = pageName.replace('.html', '');
  if (pageName === '' || pageName === 'index') {
    pageName = './';
  }

  const navLinks = document.querySelectorAll('.nav-links li a, .mobile-menu ul li a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href') || '';
    const cleanLinkHref = linkHref.replace('.html', '');
    const isHomeActive = (pageName === './' && (linkHref === './' || linkHref === '/' || linkHref === 'index.html' || linkHref === './index.html'));
    const isPageActive = (cleanLinkHref === pageName);

    if (isHomeActive || isPageActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile menu close on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
      }
    }
  });
});

// ===== MOBILE HAMBURGER MENU =====
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('open');
  }
}

// ===== PRACTICE DETAILS TAB SWITCHER =====
function showPracticeDetail(practiceId) {
  // Hide all details
  const details = document.querySelectorAll('.practice-detail');
  details.forEach(detail => {
    detail.classList.remove('active');
  });

  // Show target detail
  const targetDetail = document.getElementById(practiceId);
  if (targetDetail) {
    targetDetail.classList.add('active');
  }

  // Smooth scroll to details container
  const detailContainer = document.getElementById('practices-container');
  if (detailContainer) {
    detailContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===== CONTACT FORM VALIDATION & SUBMISSION =====
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('page-contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple client-side validation
      const nameInput = contactForm.querySelector('input[type="text"]');
      const emailInput = contactForm.querySelector('input[type="email"]');
      const phoneInput = contactForm.querySelector('input[type="tel"]');
      const messageInput = contactForm.querySelector('textarea');

      const name = nameInput ? nameInput.value.trim() : 'Client';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !phone || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Compile WhatsApp details
      const waNumber = "919034084323";
      const waText = `Hello Ortulex Law Firm,

I would like to submit a Case Evaluation Request:
• Name: ${name}
• Email: ${email}
• Phone: ${phone}
• Legal Assistance Summary: ${message}`;

      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

      // Open WhatsApp link in new tab
      window.open(waUrl, '_blank');

      // Show success message
      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.textContent = `Thank you, ${name}! Your details have been compiled. Opening WhatsApp to submit your request...`;

        // Reset form
        contactForm.reset();

        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Hide success message after 7 seconds
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 7000);
      } else {
        alert(`Thank you, ${name}! Opening WhatsApp to submit your request...`);
        contactForm.reset();
      }
    });
  }
});
