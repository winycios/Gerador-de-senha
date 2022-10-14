// seleção de elemento

const generatePassButton = document.querySelector("#generate-password")
const generatedPassElement = document.querySelector("#generated-password")

//Função

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {

    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {

    const symbols = "()[]{}=<>/,.!@#$%&*-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase,getNumber, getSymbol) => {

    let password = "";

    const passwordLenght = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(i = 0; i < passwordLenght; i = i + 4){
        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

          password += randomValue;
        });
    }

    password = password.slice(0, passwordLenght);

    generatedPassElement.style.display = "block";
    generatedPassElement.querySelector("h4").innerText = password;
}

//Evento
generatePassButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
      );
})

//aparecer senha 

toggleBtn.onclick = function () {
    if (password.type === 'password') {

        password.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');

    } else {

        password.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide')
    }
}


