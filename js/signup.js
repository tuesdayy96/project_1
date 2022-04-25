//회원가입 인풋---빈칸이 아닌경우 넘어갈 수 있음.
let id = document.getElementById('id');
let mail = document.getElementById('mail');
let pw = document.getElementById('pw');
let pw2 = document.getElementById('pw2');

function conpop(){
    if(id.value !== '' && mail.value !== '' && pw.value !== '' && pw2.value == pw.value){
        var result = confirm('Are you sure you want to complete registration?');
        if(result){
            alert('Sign up is complete.');
            self.close();
        } else {
            alert('Return to the main page.');
            window.open('index.html', '_blank');
        }
    } else {
        if(pw.value !== pw2.value){
            alert('Passwords do not match.');
        } else {
            alert('Please check your input information again.');
        }
    }
}

function closepop(){
    self.close();
}
//-------------------------------------