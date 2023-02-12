document.getElementById('btn-logIn').addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value;

    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;

    if(email === 'sontan@baap.com' && password === 'baaperbank'){
        window.location.href='insideBank.html';
    }
    else{
        alert('Please input valid Email and Password');
    }
});