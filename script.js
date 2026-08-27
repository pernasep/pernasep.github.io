document.getElementById("year").textContent = new Date().getFullYear();
const command = document.getElementById("command");
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const text = command.textContent; command.textContent = ""; let i = 0;
  const type = () => { command.textContent += text[i++]; if (i < text.length) setTimeout(type, 65); };
  setTimeout(type, 700);
}
