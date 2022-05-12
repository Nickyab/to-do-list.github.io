let addToDOButton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')
let myInput = document.getElementById('input')

addToDOButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = input.ariaValueMax;
    toDoContainer.appendChild(paragraph)
    myInput.value ="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})