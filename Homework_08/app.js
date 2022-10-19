const firstName = document.getElementById("firstName");
const submitButton = document.querySelector('#submit');
const lastName= document.getElementById("last-name");
const message= document.getElementById("text");
const err= document.getElementsByClassName ("error");
const winer = document.getElementById("succes")
 
console.log(err);

submitButton.addEventListener("click" , verifyData)
  



function verifyData(){
    var checkvar= 0;
    const fname = " " + (firstName.value);
    const lname = " " + (lastName.value);
    const msg = " " + (message.value);
    
    if(fname === " "){
        err[0].innerText='First name is require! ';
        checkvar= 1;
    }
    else {
        console.log(fname);
        err[0].innerText=" " ;
        checkvar= 0;
    }

    if(lname === " "){
        err[1].innerText='Last name is require! ';
        checkvar= 1;
    }
    else {
        console.log(lname);
        err[1].innerText=" " ;
        checkvar= 0;
    }

    if(msg === " "){
        err[2].innerText='You may to write something! ';
        checkvar= 1;
    }
    else {
        console.log(msg);
        err[2].innerText=" " ;
        checkvar= 0;
    }

    if(checkvar === 0){
        winer.innerText='Succes';
    }else{
        winer.innerText=" ";
    }
}
