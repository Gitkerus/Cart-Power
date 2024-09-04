const footerForm = document.getElementById('footerForm');
const nameInput = document.getElementById('footerInputName');
const phoneInput = document.getElementById('footerInputPhone');
const mailInput = document.getElementById('footerInputMail');

// Маска на поле телефона
const maskOptions = {
  mask: '{8}(000)000-00-00'
};
const mask = IMask(phoneInput, maskOptions);


// Валидация

footerForm.addEventListener('submit', e => {
    e.preventDefault();
    if (validateInputs()) {
        console.log("Валидация прошла успешно");
        footerForm.reset();
    } else {
        console.log("Форма не прошла валидацию");
    }
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.subscribe-form__input-msg');

    errorDisplay.innerText = message;
    inputControl.classList.add('subscribe-form__input_error');
    inputControl.classList.remove('subscribe-form__input_ok');
}

const setOk = ( element ) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.subscribe-form__input-msg');

    errorDisplay.innerText = '';
    inputControl.classList.add('subscribe-form__input_ok');
    inputControl.classList.remove('subscribe-form__input_error');
}

const isValidEmail = ( email ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhone = ( phone ) => {
    const phoneStr = String(phone).replace("(", "").replace(")", "").replaceAll("-", "");
    const re = /^[0-9]{11}$/;
    return re.test(phoneStr);
}

const validateInputs = () => {
    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const mailValue = mailInput.value.trim();
    

    if(nameValue === '') {
        setError(nameInput, 'Укажите ваше имя');
    } else {
        setOk(nameInput);
    }
    
    if(phoneValue === '') {
        setError(phoneInput, 'Укажите ваш телефон');
    } else if (!isValidPhone(phoneValue)) {
        setError(phoneInput, 'Введите корректный номер телефона');
    } else {
        setOk(phoneInput);
    }

    if(mailValue === '') {
        setError(mailInput, 'Укажите ваш email');
    } else if (!isValidEmail(mailValue)) {
        setError(mailInput, 'Введите корректный адрес email');
    } else {
        setOk(mailInput);
    }

    if(nameValue !== '' && phoneValue !== '' && mailValue !== '' && isValidPhone(phoneValue) && isValidEmail(mailValue)) {
        const allInputs = document.querySelectorAll(".subscribe-form__input");
        allInputs.forEach((element) => {
            element.classList.remove("subscribe-form__input_ok")
        })
        return true
    } else {
        return false
    }
};



