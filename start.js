
function on_click_btn(){
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let btn = document.getElementById('signInBtn');

    btn.addEventListener('click',check_username_password(userName, password));

    }


function check_username_password (str, num){
    if (str != 'abcd'){
        let wrongUser = document.createElement('p');
        wrongUser.innerHTML ='user name does not exist';
        document.getElementById('userDiv').appendChild(wrongUser);
    }

    if (num != 1234){
        let wrongPassword = document.createElement('p');
        wrongPassword.innerHTML = 'wrong password';
        document.getElementById('passDiv').appendChild(wrongPassword);
    }

    else{
        document.getElementById('signInBtn').onclick = location.replace("game.html");
    }
}