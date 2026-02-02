function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "yourSecret123"; // değiştir

  if (input === correctPassword) {
    window.location.href = "content.html";
  } else {
    document.getElementById("error").innerText = "Wrong password";
  }
}
