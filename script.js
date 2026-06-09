document.getElementById("year").textContent = new Date().getFullYear();

if (window.lucide) {
  window.lucide.createIcons();
}

const typedRole = document.getElementById("typed-role");
const roles = ["Java Full Stack Developer", "Spring Boot + Angular", "Travel & booking systems"];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!typedRole) return;

  const current = roles[roleIndex];
  typedRole.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex += 1;
    setTimeout(typeRole, 70);
    return;
  }

  if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(typeRole, 1200);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeRole, 35);
    return;
  }

  deleting = false;
  roleIndex = (roleIndex + 1) % roles.length;
  setTimeout(typeRole, 240);
}

typeRole();
