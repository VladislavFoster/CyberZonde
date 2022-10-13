const dragItems = document.querySelectorAll('.dragItem');
const dropZones = document.querySelectorAll('#imgPrev');

let draggedItem = null;
let droppedItem = null;

dragItems.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDragStart);
    dragItem.addEventListener('dragend', handlerDragEnd);
    dragItem.addEventListener('drag', handlerDrag);

    dragItem.addEventListener('dragenter', ()=>{
        if(draggedItem != droppedItem){
            droppedItem = dragItem;
        }
    })
    
    dragItem.addEventListener('dragleave', ()=>{
        droppedItem = null;
    })
});

dropZones.forEach(dropZone =>{
    dropZone.addEventListener('draglenter', handlerDragEnter);
    dropZone.addEventListener('dragleave', handlerDragLeave);
    dropZone.addEventListener('dragover', handlerDragOver);
    dropZone.addEventListener('drag', handlerDrop);
})

function handlerDragStart(){
    this.classList.add('active');
    draggedItem = this;
}

function handlerDragEnd(){
    this.classList.remove('active');
    draggedItem = null;
}

function handlerDrag(event){}

function handlerDragEnter(event){
    event.preventDefault();
    this.classList.add('dropZoneActive');
}

function handlerDragLeave(){
    this.classList.remove('dropZoneActive');
}

function handlerDragOver(event){
    event.preventDefault();
}

function handlerDrop(event){
    if(droppedItem){
        if(droppedItem.parentElement == draggedItem.parentElement){
            const children = Array.from(droppedItem.parentElement.children);
            const draggedIndex = children.indexOf(draggedItem);
            const droppedIndex = children.indexOf(droppedItem);
    
            if(draggedIndex > droppedIndex){
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem)
            }else{
                draggedItem.parentElement.insertBefore(
                    draggedItem, 
                    droppedItem.nextElementSibling
                );
            }
        }else{
            this.insertBefore(draggedItem, droppedItem);
        }
    }else{
        this.append(draggedItem);
    }

    dropZones.forEach(dropZone=>{
        dropZone.classList.remove('dropZondeActive')
    })
}