const imgsContainer = document.querySelector('#imgPrev');
const body = document.querySelector('body');

imgsContainer.addEventListener('click', event =>{
    let imgContainer = event.target.parentElement;
    let removeImg = imgContainer.children[1];
    let watchMoreImg = imgContainer.children[2];
    let cup =  imgContainer.children[3];

    if(event.target == removeImg){
        imgContainer.remove();
    }

    if(event.target == watchMoreImg){
        let moreImgContainer = imgContainer.innerHTML;
        body.insertAdjacentHTML('afterbegin', `<div class="watchImg">${moreImgContainer}</div>`)
    }
    
    if(event.target == cup.closest('.blueCupImg')){
        let targetImg = event.target.parentElement;
        let blueCup = event.target;
        let redCupCode = '<img class="redCupImg" src="./src/assets/imgs/redCupImg.png" alt="">';
        let blueCupCode = '<img class="blueCupImg" src="./src/assets/imgs/blueCupImg.png" alt="">';
        
        blueCup.insertAdjacentHTML('beforebegin', redCupCode);
        
        let cloneElem = targetImg.outerHTML;
        
        imgsContainer.insertAdjacentHTML('afterbegin', cloneElem);
        targetImg.remove();
        imgsContainer.children[0].children[4].remove();

        let prevRedCupElem = imgsContainer.children[1].children[3];
        prevRedCupElem.insertAdjacentHTML('beforebegin', blueCupCode);
        prevRedCupElem.remove();
    }
})

body.addEventListener('click', event=>{
    if(event.target == body.children[0].children[1]){
        body.children[0].remove();
    }
})