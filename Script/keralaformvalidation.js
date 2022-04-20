let email= document.getElementById("email");
let pwd= document.getElementById('pwd');
let label= document.getElementById('error')

// function validate(){

// // if(email.value.trim()==""||pwd.value.trim()==""){ 
    
// //     alert("No field can be empty");
// //     return false;
// // }
// // else{
// //     return true;
// //     // alert ("valid");
    
// // }

// }

function validate(){
    let regularexpression=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regularexpression.test(email.value)){
        
        error.innerHTML = "Valid";
        error.style.color = "green";
        if (pwd.value.length<6){

            alert("Password needs to be min 6 letter");
            pwd.style.border="2px solid red";
            return false;
        }
    
        else if (pwd.value==""){
            alert ("password can't be blank");
            return false;
        }
        
    
        else{ return true;
        
        }
    
        return true;
                
    }

    else {

        error.innerHTML= "invalid"
        error.style.color = "red"
        return false;
        
    } 
}
//      function validate(){
//     if (pwd.value.length<6){

//         alert("Password needs to be min 6 letter");
//         pwd.style.border="2px solid red";
//         return false;
//     }

//     else if (pwd.value==""){
//         alert ("password can't be blank");
//         return false;
//     }
    

//     else{ return true;
    
//     }

// }

