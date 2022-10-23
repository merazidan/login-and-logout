var inputEmail= document.getElementById("email");
var inputPassword= document.getElementById("Pass");
var inputName= document.getElementById("name");
var emailValidation= document.getElementsByClassName('emailvalid')[0]
var btnSignIn =document.getElementById("btnSignIn")
var btnSignUp= document.getElementById("buttonSignup")
var btnlogOut = document.getElementById("logOut")
var emailLogin=document.getElementById('emailLogin')
var regexE =/^[a-z]{4,}[0-9]{0,8}@gmail\.com$/
var regexP =/^[0-9]{4,9}./
accountRegester=[]
if( localStorage.getItem("accounts that are defined")==null){
    accountRegester=[]   
}
else {
   accountRegester= JSON.parse(localStorage.getItem("accounts that are defined"))
}


function login(){
    var boolean= false;
    var currentUser;
    var account = {
        Password:inputPassword.value,
        Email:inputEmail.value,}
    for(var i=0 ;i<accountRegester.length;i++){
        if(accountRegester[i].email==account.Email){
         boolean=true;
          currentUser=accountRegester[i];
        }
       
    }
    if(boolean){
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        location.href='welcome.html';
      
    }
    else{
      emailLogin.innerHTML='<h2 class=" fs-6 text-danger">This email is not found </h2>'
       }
  
}
if(btnSignIn){
    btnSignIn.addEventListener("click", login)
}
function validation(){
    if( regexE.test(inputEmail.value)==true && regexP.test(inputPassword.value)==true){
        return true;
    }
    else{
        return false;
    }
}

function logOut(){
    
        
if(validation() && one()){
    var account = {
        Name:inputName.value,
        Password:inputPassword.value,
        email:inputEmail.value,
    }
    accountRegester.push(account)
    localStorage.setItem("accounts that are defined", JSON.stringify(accountRegester))
    if (emailValidation){
        emailValidation.innerHTML='<h2 class=" fs-6 text-success">Success</h2>'
    }
}
else if (validation()==true && one ()==false){
    emailValidation.innerHTML='<h2 class=" fs-6 text-danger">This email is already found please try by another email</h2>'
   }
else  {
    emailValidation.innerHTML='<h2 class=" fs-6 text-danger">Invalid</h2>'
}

}
 
 

if(btnSignUp){
    btnSignUp.addEventListener("click", logOut)

}

function loginWelcome(){
    var x=JSON.parse( localStorage.getItem('currentUser'))
    var cartona=``
    cartona = `<h1>welcome ${x.Name}</h1>`
    document.getElementById("helloName").innerHTML=cartona; 
}
console.log()

if(btnlogOut){
    
    btnlogOut.addEventListener("click", function(){
        localStorage.removeItem('currentUser')
    })

           
        }

    
   
 function one (){
            for(var i=0;i<accountRegester.length;i++){
            if( accountRegester[i].email== inputEmail.value){
            return false;
          }
          } 
          return true;
          }
       
