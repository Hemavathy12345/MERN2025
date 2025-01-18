//Callback

function submitF(submit,isValid){
if((isValid())){
    console.log("Form submited Sucessfully")
    console.log("submit")
}
else{
    console.log("Form not submited")
    console.log("Not submit")
}
}

function formValidation(){
email="sece@gmail.com"
password=123
if(email==="sece@gmail.c" && password){
    return true
}
else{
    return false
}
}
submitF("For submited Sucessfully", formValidation)