// console.log("showHidePassword");

let eyeCloseImg = document.getElementById("eyeCloseImg");
let passInputBox = document.getElementById("passInputBox");
eyeCloseImg.onclick = function(){
    // console.log("its functions");
    if(passInputBox.type == "password"){
        passInputBox.type = "text";
        // console.log(passInputBox);
        eyeCloseImg.src = "eye-open.png"
    }else{
        passInputBox.type="password";
        eyeCloseImg.src = "eye-close.png" 
    }
}