window.addEventListener('DOMContentLoaded', ()=>{
    const formImage = document.querySelector('#addImg');
    const imgPreview = document.getElementById('imgPrev');
    
    formImage.addEventListener('change', ()=>{
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file){
        if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)){
            alert('Разрешены только изображения');
            formImage.value = '';
            return;
        }

        if(file.size > 2 * 1024 * 1024){
            alert('Файл должен быть меньше 2 МБ');
            return;
        }

        let reader = new FileReader();
        reader.onload = function(e){
			if(imgPreview.childElementCount == 0){
				imgPreview.insertAdjacentHTML('afterbegin', `
					<div class="addedImg">
						<img class="addImg" src="${e.target.result}" alt="">
						<img class="deleteImg" src="./src/assets/imgs/deleteImg.png" alt="">
						<img class="watchImg" src="./src/assets/imgs/watchImg.png" alt="">
						<img class="redCupImg" src="./src/assets/imgs/redCupImg.png" alt="">
				</div>`);
			}else{
				imgPreview.insertAdjacentHTML('beforeend', `
					<div class="addedImg">
						<img class="addImg" src="${e.target.result}" alt="">
						<img class="deleteImg" src="./src/assets/imgs/deleteImg.png" alt="">
						<img class="watchImg" src="./src/assets/imgs/watchImg.png" alt="">
						<img class="blueCupImg" src="./src/assets/imgs/blueCupImg.png" alt="">
				</div>`);
			}
            
        }

        reader.onerror = function(e){
            alert('Ошибка');
        }

        reader.readAsDataURL(file)
    }
})