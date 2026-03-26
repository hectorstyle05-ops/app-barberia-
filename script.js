const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const year = document.getElementById("year");
const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");

year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const nombre = formData.get("nombre");
  formMessage.textContent = `¡Gracias ${nombre}! Tu solicitud fue enviada. Te contactaremos pronto.`;
  bookingForm.reset();
});
