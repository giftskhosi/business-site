const name = document.getElementById('name');
const surname = document.getElementById('surname');
const genderChoices = document.getElementById('gender');
const occupation = document.getElementById('occupation');
const email = document.getElementById('email');
const package = document.getElementById('package');
const btnSubmit = document.getElementById('btn-submit');
const btnReset = document.getElementById('btn-reset');



btnSubmit.addEventListener('click', (e) => {
    function validate(){
        // Validating the radio buttons
        let gen = document.forms["myForm"]["gender"];
        // if(gen[0].checked==false && gen[1].checked==false){
        //     alert("Please select gender!!");
        // } else if (gen[0].checked==true){
        //     gen[1].checked==false;
        // } else if (gen[1].checked==true){
        //     gen[0].checked==false;
        // }

        let pac = document.forms["myForm"]["package"];
        // if(pac[0].checked==false && pac[1].checked==false){
        //     alert("Please select package!!");
        // }
        //Validate input boxes
        
        if(name.value == "" || surname.value == "" || occupation.value == "" || email.value == "" || gen[0].checked==false || gen[1].checked==false || pac[0].checked==false || pac[1].checked==false){
            alert("Please fill in thre missing field(s)!!!");
        } else {
            alert("Successfully registered!!!");
        }

    }

    validate();
})
