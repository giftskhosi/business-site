const username = document.getElementById('username');
const password = document.getElementById('password');

    function loginFunc(){
        var display_error = document.getElementById('error');
        if(username.value == "" || password.value == ""){  
            display_error.innerHTML = ("Please enter username or password");
        } else if (username.value == "giftskhosi101@gmail.com" && password.value == 12345 ){
            window.open('home.html');
        } else {
            alert("please enter correct details");
        }
        
    }


//////////////////////////////////////////////////////////////