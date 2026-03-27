const form = document.getElementById('bookingForm');
const message = document.getElementById('formMessage');
const year = document.getElementById('year');
const dateInput = document.querySelector('input[name="date"]');

const getLocalDateISO = () => {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now.getTime() - offsetMs).toISOString().split('T')[0];
};

if (year) {
  year.textContent = new Date().getFullYear();
}

if (dateInput) {
  dateInput.min = getLocalDateISO();
}

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();
    const service = (formData.get('service') || '').toString().trim();
    const date = (formData.get('date') || '').toString().trim();

    if (!name || !phone || !service || !date) {
      message.textContent = 'Completá todos los campos para reservar tu turno.';
      return;
    }

    message.textContent = `¡Gracias ${name}! Tu turno para ${service} quedó reservado para el ${date}.`;
    form.reset();

    if (dateInput) {
      dateInput.min = getLocalDateISO();
    }
  });
}
