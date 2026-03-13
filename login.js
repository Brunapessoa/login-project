const submitEvent = document.getElementById('formId');

submitEvent.addEventListener('submit', goToPage);

function goToPage(event) {
    event.preventDefault();
    window.open('https://brunapessoa.github.io/', '_blank');
}

