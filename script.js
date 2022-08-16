let inputs = document.querySelectorAll('input')
let allFieldsAreValid = false

inputs.forEach(input => {
    input.addEventListener('change', () => {
        let inputValue = input.value
        let inputName = input.getAttribute('name')
        let nextSibling = input.nextElementSibling

        validate(nextSibling, inputValue, inputName)
    })
})

let submit = document.querySelector('#submit')

document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        submit.click()
    }
})

submit.addEventListener('click', e => {

    if (areEmpty(inputs)) {
        allFieldsAreValid = false
    }

    if (!allFieldsAreValid) {
        alert('All fields must be valid!')
        e.preventDefault()
    } else {
        confirm('Everything is OK! Proceed with registration?')
    }

})


function validate(nextSibling, inputValue, inputName) {

    allFieldsAreValid = true
    printError(nextSibling, "")

    if (inputValue.length < 6) {
        allFieldsAreValid = false
        printError(nextSibling, "Input too short! ")
    }

    switch (inputName) {
        case 'name':
            let validation = inputValue.trim()
            validation = validation.split(" ")
            if (validation.length < 2) {
                allFieldsAreValid = false
                printError(nextSibling, "Enter both first and last name!")
            }
            break
        case 'email':
            if (!validateEmail(inputValue)) {
                allFieldsAreValid = false
                printError(nextSibling, "Email invalid!")
            }
            break
        case 'password':
            if (!validatePassword(inputValue)) {
                allFieldsAreValid = false
                printError(nextSibling, `Password must:\n
                Be at least 8 characters long\n
                Include both lower and upper case characters\n
                Include at least one number and symbol`)
            }
            break
        case 'retypePassword':
            let password = document.querySelector('#password').value

            if (password != inputValue) {
                allFieldsAreValid = false
                printError(nextSibling, "Plese retype password correctly!")
            }
            break
    }


}

function areEmpty(inputs) {
    inputs.forEach(e => {
        if (e.value === "") {
            allFieldsAreValid = false
        }
    })
}

function printError(nextSibling, msg) {
    nextSibling.innerText = msg
}

function validatePassword(inputValue) {
    if (/^(?=.*\d)(?=.*[.?!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(inputValue)) {
        return true
    } else {
        return false
    }
}

function validateEmail(inputValue) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
        return true
    } else {
        return false
    }
}