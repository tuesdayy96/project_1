let id = document.getElementById('id');
let mail = document.getElementById('mail');
let pw = document.getElementById('pw');
let pw2 = document.getElementById('pw2');

function conpop(){
    if(id.value !== '' && mail.value !== '' && pw.value !== '' && pw2.value == pw.value){
        var result = confirm('회원가입을 완료하시겠습니까?');
        if(result){
            alert('회원가입이 완료되었습니다.');
            self.close();
        } else {
            alert('메인페이지로 돌아갑니다.');
            window.open('index.html', '_blank');
        }
    } else {
        alert('입력정보를 다시 한번 확인해주세요');
    }
}

function closepop(){
    self.close();
}