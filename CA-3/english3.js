
function alertStatement(statement) {
    alert(statement);
}

document.querySelectorAll('.statement').forEach(item => {
    item.addEventListener('click', () => {
        alertStatement(item.innerText);
    });
});