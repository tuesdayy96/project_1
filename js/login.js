//로그인 화면
var id = document.getElementById('id');
var pw = document.getElementById('pw');
var login = document.getElementById('login');
var sign = document.getElementById('sign');

function join(){
    if(id.value == "admin" && pw.value == "1234"){
        alert('Succese Login');
        location.href = 'index.html';
    }
    else {
        alert('Login failed');
    }
        
}
login.addEventListener('click',join);
//------------------------

//회원가입 팝업
function popup(){
   window.open('sign.html',"회원가입",'width=650,height=750,top=100,left=500px,location=no,toolbar=no')
    
}
sign.addEventListener('click',popup);

//---------------------------------------
