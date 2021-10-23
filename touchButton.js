const sf = {};

sf.touchButton = document.querySelector('.touchButton');
sf.form = document.querySelector('.touchButton > #singular-form');
sf.trigger = document.querySelector('.touchButton > #singular-form > button#trigger');
sf.input = document.querySelector('.touchButton>#singular-form>#input-container>input');
sf.submitButton = document.querySelector('.touchButton > #singular-form > #input-container > button');
sf.successMessage = document.querySelector('.touchButton > #singular-form > #success');

sf.submitDelay = 1500;

sf.clickHandler = (e) =>
{
    switch (e.target) {
        case sf.trigger:
            sf.touchButton.style.width = '37rem'
            e.target.classList.remove('shown');
            sf.input.classList.add('shown');
            sf.submitButton.classList.add('shown');
            sf.input.focus();
            break;
        case sf.submitButton:
            sf.submitForm();
            break;
    }
}

sf.submitForm = () =>
{
    sf.input.style.transition = 'all .4s ease';
    sf.submitButton.style.transition = 'all .4s ease';
    sf.input.classList.remove('shown');
    sf.submitButton.classList.remove('shown');
    sf.touchButton.style.transition = 'all .4s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
    sf.touchButton.style.width = '';
    sf.successMessage.classList.add('shown');
    setTimeout(() => sf.form.submit(), sf.submitDelay);
}

document.addEventListener('click', (e) => sf.clickHandler(e));