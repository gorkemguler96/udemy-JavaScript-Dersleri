
const boxes = document.querySelectorAll('.box');

console.log(boxes)

// Array.from(boxes).forEach(box => box.style.backgroundColor='green')

for(let i=0; i<boxes.length; i++){
    if(boxes[i].className == 'box blue'){
        continue;
    }
    boxes[i].textContent='Im changed';
    boxes[i].style.backgroundColor='blue'
}


