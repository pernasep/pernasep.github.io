const lines = [
    "Dev Front-end & Systems.",
    "Construindo interfaces limpas.",
    "Resolvendo lógicas complexas."
];

const el = document.getElementById('typewriter');
let li = 0, ci = 0;

function type() {
    if (li >= lines.length) return;
    if (ci < lines[li].length) {
        el.innerHTML += lines[li][ci++];
        setTimeout(type, 40);
    } else {
        li++;
        if (li < lines.length) {
            el.innerHTML += '<br><br>';
            ci = 0;
            setTimeout(type, 40);
        }
    }
}

window.addEventListener('load', () => setTimeout(type, 500));
