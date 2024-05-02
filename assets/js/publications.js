
const toggleBibtex = (key) => {
    var x = document.getElementById(`a${key}`);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
const toggleAbstract = (key) => {
    var x = document.getElementById(`b${key}`);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
