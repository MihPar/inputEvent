const input = document.createElement('input')
document.body.append(input)
// input.oninput = () => console.log('hello')
document.body.addEventListener('input',() => console.log('hello')) 
