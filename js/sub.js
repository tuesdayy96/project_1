

var sell_price = 99000;
var amount = document.form.amount.value;
document.form.sum.value = sell_price;
function add(){
    hm = document.form.amount;
    sum = document.form.sum;
    if(hm.value >= 99){
        hm.value = 99 - 1;
        alert('최대 99개까지 구매할 수 있습니다.');
    }
    hm.value++;
    sum.value = parseInt(hm.value)* sell_price;
}
function del(){
    hm = document.form.amount;
    sum = document.form.sum;
    if(hm.value > 1){
        hm.value --;
        sum.value = parseInt(hm.value)* sell_price;
    }
};
function change(){
    hm = document.form.amount;
    sum = document.form.sum;
    if(hm.value < 0){
        hm.value = 0;
    }
    sum.value = parseInt(hm.value)* sell_price;
};


const detailbtn1 = document.getElementsByClassName('pd_btn1')[0];
const detailbtn2 = document.getElementsByClassName('pd_btn2')[0];
const detailbtn3 = document.getElementsByClassName('pd_btn3')[0];
const btn_1 = document.querySelector('.btn_info1');
const btn_2 = document.querySelector('.btn_info2');
const btn_3 = document.querySelector('.btn_info3');

function click_1(){
    detailbtn1.classList.add('active');
    detailbtn2.classList.remove('active');
    detailbtn3.classList.remove('active');
    btn_2.style.display = 'none';
    btn_3.style.display = 'none';
    btn_1.style.display = 'block';
    document.querySelector('.pd_info').style.height = '400px';
}
function click_2(){
    detailbtn2.classList.add('active');
    detailbtn1.classList.remove('active');
    detailbtn3.classList.remove('active');
    btn_1.style.display = 'none';
    btn_3.style.display = 'none';
    btn_2.style.display = 'block';
    document.querySelector('.pd_info').style.height = '800px';
}
function click_3(){
    detailbtn3.classList.add('active');
    detailbtn1.classList.remove('active');
    detailbtn2.classList.remove('active');
    btn_1.style.display = 'none';
    btn_2.style.display = 'none';
    btn_3.style.display = 'block';
    document.querySelector('.pd_info').style.height = '400px';
}


slideIndex = 0;
slideShow();
function slideShow(){
let i;
let slides = document.querySelectorAll('.autoslide li');
for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
    }
slideIndex++;
if(slideIndex > slides.length)
{slideIndex = 1}
slides[slideIndex-1].style.display = 'block';
setTimeout(slideShow, 5000);
}


let i = 0;
let posiTion = 0;
const imageWidth = 560;
const prevbtn = document.getElementById('lt');
const nextbtn = document.getElementById('gt');
const images = document.querySelector('.albumbox');
const imgcount = document.querySelectorAll('.albumbox li');

function prev(){
if(i > 0){
    nextbtn.removeAttribute('disabled')
    posiTion += imageWidth;
    images.style.transform = `translateX(${posiTion}px`;
    i = i - 1;
}
if(i == 0){
    prevbtn.setAttribute('disabled','true');

}
}
function next(){
if(i < imgcount.length-1){
    prevbtn.removeAttribute('disabled')
    posiTion -= imageWidth;
    images.style.transform = `translateX(${posiTion}px)`;
    i = i + 1;
}
if(i == imgcount.length-1){
    nextbtn.setAttribute('disabled','true');
    }
}
function init(){
prevbtn.setAttribute('disabled','true')
prevbtn.addEventListener('click', prev)
nextbtn.addEventListener('click', next)
}
init();