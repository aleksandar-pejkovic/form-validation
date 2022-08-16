let inputs = document.querySelectorAll('input')
let errors = {
    "name": [],
    "username": [],
    "email": [],
    "password": [],
    "retypePassword": [],
}

inputs.forEach(element => {
    element.addEventListener('change', e => {
        let currentInput = e.target
        let inputValue = currentInput.value
        let inputName = currentInput.getAttribute('name')


        if (inputValue.length > 4) {

            switch (inputName) {
                case 'name':
                    let validation = inputValue.trim()
                    validation = validation.split(" ")
                    if (validation.length < 2) {
                        errors[inputName].push('Enter both first name and last name!')
                    }
                    break
                case 'email':
                    if (!validateEmail(inputValue)) {
                        errors[inputName].push('Email is invalid')
                    }
                    break
            }


        } else {
            errors[inputName] = ['Too short']
        }

        console.log(`${inputName} = ${inputValue}`)

        populateErrors()
    })
})

const populateErrors = () => {

    for (let elem of document.querySelectorAll('ul')) {
        elem.remove()
    }

    for (let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name="${key}"]`)
        let parenteElement = input.parentElement
        let errorsElement = document.createElement('ul')
        parenteElement.appendChild(errorsElement)


        errors[key].forEach(error => {
            let li = document.createElement('li')
            li.innerText = error

            errorsElement.appendChild(li)
        })

    }

}

const validateEmail = email => {
    if ('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'.test(eamil)) {
        return true
    } else {
        return false
    }
}