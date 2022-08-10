let inputs = document.querySelectorAll('input')
let errors = {
    "inputName": [],
    "inputUsername": [],
    "inputEmail": [],
    "inputPassword": [],
    "inputRetypePassword": [],
}

inputs.forEach(element => {
    element.addEventListener('change', e => {
        let currentInput = e.target
        let inputValue = currentInput.value
        let inputName = currentInput.getAttribute('name')


        if(inputValue.length >4) {
            console.log('OK')
        } else {
            errors[inputName] = ['Too short']
        }
 
        console.log(`${inputName} = ${inputValue}`)
    })
})