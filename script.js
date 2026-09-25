const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  siteNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const WHATSAPP_NUMBER = "919794980818";

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("cf-name").value.trim();
    const phone = document.getElementById("cf-phone").value.trim();
    const message = document.getElementById("cf-message").value.trim();

    if (!name || !phone) {
      contactForm.reportValidity();
      return;
    }

    const lines = [
      "Hi Jivantag, I'd like to get in touch.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`
    ];

    if (message) {
      lines.push(`Message: ${message}`);
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener");

    contactForm.reset();
  });
}
