// 검색 애니메이션
const sch = document.querySelector('.hdrCon_sch');
const schBar = document.querySelector('.sch_bar');

function togsch(){
    sch.classList.toggle('sc1');
    schBar.classList.toggle('sc2');
    }  
    sch.addEventListener('click', togsch);