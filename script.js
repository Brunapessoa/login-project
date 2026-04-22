const submitEvent = document.getElementById('formId');
const forgotPass = document.getElementById('forgotBtn');
const modalForgotPass = document.getElementById('modalForgotPass');

submitEvent.addEventListener('submit', goToPage);

function goToPage(event) {
    event.preventDefault();
    window.open('https://brunapessoa.github.io/', '_blank');
}

forgotPass.addEventListener('click', openModal);

function openModal() {
    modalForgotPass.style.display = 'block';
    modalForgotPass.innerHTML = '<button type="button" id="closeBtn">X</button><p>Enter your e-mail to reset yout password</p><label for="emailModal"></label><input type="email" name="email" id="emailModal" placeholder="Your email" required autocomplete="email" maxlength="30"><br><button type="submit" value="Send" id="sendBtn">Send</button>';
    
    const closeModal = document.getElementById('closeBtn');
    const formModal = document.getElementById('formModal')

    closeModal.addEventListener('click', closeWindow);
    formModal.addEventListener('submit', changeMsg);
}


function closeWindow() {
    modalForgotPass.style.display = 'none';
}


function changeMsg(event) {
    event.preventDefault();
    modalForgotPass.innerHTML = '<button id="closeNewBtn">X</button><p>Thank you!<br>We sent you an email to reset your password</p>';
    
    const closeModal2 = document.getElementById('closeNewBtn');
    closeModal2.addEventListener('click', closeWindow);
}

