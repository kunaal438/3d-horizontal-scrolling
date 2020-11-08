const content = [...document.querySelectorAll('.container .content')];

const nxtBtn = document.querySelector('.nxt-btn');
const preBtn = document.querySelector('.pre-btn');

let i = 0;

window.onload = () => {
    window.scrollTo(window.innerWidth*i, 0);
}

const slideNxt = () => {
    if(i < 3 && !nxtBtn.className.includes('disable')){
        content[i].classList.add('rotate');
        content[i+1].classList.add('rotate');
        
        setTimeout(() => {
            content.map(item => item.className = 'content');
            nxtBtn.classList.remove('disable');
            preBtn.classList.remove('disable');
        }, 2000);

        i++;
        setTimeout(() => {
            window.scrollTo(window.innerWidth*i, 0);
        }, 1000);
    }
}

const slidePre = () => {
    if(i > 0 && !preBtn.className.includes('disable')){
        content[i].classList.add('rotate-back');
        content[i-1].classList.add('rotate-back');
        
        setTimeout(() => {
            content.map(item => item.className = 'content');
            nxtBtn.classList.remove('disable');
            preBtn.classList.remove('disable');
        }, 2000);

        i--;
        setTimeout(() => {
            window.scrollTo(window.innerWidth*i, 0);
        }, 1000);
    }
}

nxtBtn.addEventListener('click', () => {
    slideNxt();
    nxtBtn.classList.add('disable');
})

preBtn.addEventListener('click', () => {
    slidePre();
    preBtn.classList.add('disable');
})