const lines = [
    "Front-end & Suporte/TI.",
    "Construindo interfaces responsivas.",
    "Resolvendo problemas com clareza."
];

const el = document.getElementById('typewriter');
let lineIndex = 0;
let charIndex = 0;

function type() {
    if (lineIndex >= lines.length) return;

    if (charIndex < lines[lineIndex].length) {
        el.textContent += lines[lineIndex][charIndex++];
        setTimeout(type, 40);
        return;
    }

    lineIndex++;

    if (lineIndex < lines.length) {
        el.appendChild(document.createElement('br'));
        charIndex = 0;
        setTimeout(type, 400);
    }
}

window.addEventListener('load', () => setTimeout(type, 500));
