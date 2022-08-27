// function otpalrt() {
//     alert("Your OTP is 0024");
//   }
var username = document.getElementById('userame').value;
var pass = document.getElementById('password').value;

var user={
  username:username,
  password:pass,
};

var json = JSON.stringify(user);
localStorage.setItem(username,json);
console.log('user added');


  function loginFunc(e){
event.preventDefault();

var username = document.getElementById('userame').value;
var pass = document.getElementById('password').value;

var user= localStorage.getItem(username);
var data= JSON.parse(user);
console.log(data);


if(user ==null){
  alert("wronge username");
}else if(username == data.username && pass == data.password){
  alert("login successful");
}else{
  alert("wrong password");
}
  }