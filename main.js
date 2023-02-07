let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let container = document.getElementById('container')


let i = 18
function say(say){
if(input1.value >= i ){
    container.innerHTML = 'Hello User'
    container.style.color = 'green'
    container.style.position = 'absolute'
    container.style.left = '550px'
    container.style.top = '300px'
    container.style.fontSize = '30px'
    container.style.fontFamily = 'system-ui'
}
else{
    container.innerHTML = 'Your age does not allow you to access this site'  
    container.style.color = 'red'
    container.style.position = 'absolute'
    container.style.left = '400px'
    container.style.top = '300px'
    container.style.fontSize = '30px'
    container.style.fontFamily = 'system-ui'
}
}