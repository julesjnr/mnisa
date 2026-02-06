// Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Scroll Reveal Animation
const revealElements = document.querySelectorAll("section, .project-card");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Navbar Active Link Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// Button Ripple Effect
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});


// Optional Typing Intro (if element exists)
const typingTarget = document.querySelector(".typing");

if (typingTarget) {
  const text = typingTarget.innerText;
  typingTarget.innerText = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      typingTarget.innerText += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}
