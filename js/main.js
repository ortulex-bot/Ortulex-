// ===== DYNAMIC HEADER AND FOOTER TEMPLATES =====
const headerTemplate = `
  <!-- TOP HIGHLIGHTS STRIP -->
  <div class="banner-strip">
    Ortulex Law Firm – High-Caliber Legal Advisory in Delhi Since 2023 – Request a Free Consultation
  </div>

  <!-- FIXED NAVBAR -->
  <nav id="navbar">
    <div class="nav-inner">
      <a class="nav-logo" href="index.html">
        <img src="images/logo.png" alt="Ortulex Emblem Logo">
      </a>
      
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="practices.html">Practice Areas</a></li>
        <li><a href="team.html">Our Team</a></li>
        <li><a href="why.html">Why Ortulex</a></li>
        <li><a class="nav-cta" href="consultation.html">Consultation</a></li>
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
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="practices.html">Practice Areas</a></li>
      <li><a href="team.html">Our Team</a></li>
      <li><a href="why.html">Why Ortulex</a></li>
      <li><a class="nav-cta" style="text-align: center; margin-top: 10px;" href="consultation.html">Consultation</a></li>
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
            <li><a href="index.html">Home Page</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="practices.html">Practice Areas</a></li>
            <li><a href="team.html">Our Team</a></li>
            <li><a href="why.html">Why Ortulex</a></li>
            <li><a href="consultation.html">Consultation</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Practice Areas</h5>
          <ul>
            <li><a href="practices.html">Corporate Law</a></li>
            <li><a href="practices.html">Criminal Defense</a></li>
            <li><a href="practices.html">Matrimonial Disputes</a></li>
            <li><a href="practices.html">Civil Recovery</a></li>
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
        <p>Strategic Design by <a href="#" style="color: var(--gold);">Antigravity</a></p>
      </div>
    </div>
  </footer>
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

  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  const navLinks = document.querySelectorAll('.nav-links li a, .mobile-menu ul li a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === pageName) {
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
