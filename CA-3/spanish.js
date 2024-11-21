
function showTranslation(element) {
    const translation = element.getAttribute('data-translation');
    alert(`English Translation: ${translation}`);
}
document.querySelectorAll('.word').forEach(item => {
    item.addEventListener('click', () => {
        showTranslation(item);
    });
});