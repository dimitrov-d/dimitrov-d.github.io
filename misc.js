const tempText = document.getElementById('bottext');
const projectText = tempText.innerHTML;
const collapseAnchor = document.getElementById('collapseAnchor');
tempText.innerHTML = croppedText(projectText);

function expandText() {
    tempText.innerHTML = projectText;
    collapseAnchor.style.display = 'block';
}

function collapseText() {
    tempText.innerHTML = croppedText(projectText);
    collapseAnchor.style.display = 'none';
}

function croppedText(text) {
    return `${text.substring(0, 220)}... <a class="action-link" onclick="expandText()">Show More</a>`;
}
