document.getElementById('appointmentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    document.getElementById('formMessage').innerText = `Thank you ${name}! We will contact you soon.`;
    document.getElementById('appointmentForm').reset();
  } else {
    document.getElementById('formMessage').innerText = "Please fill all fields.";
  }
});
