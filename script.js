function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

function generateAndDisplayPassword() {
    const numPasswords = parseInt(document.getElementById("numPasswords").value);
    const passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.innerHTML = "";

    for (let i = 1; i <= numPasswords; i++) {
        const passwordLength = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        const password = generatePassword(passwordLength);
        passwordOutput.innerHTML += `Password ${i}: ${password}<br>`;
    }
}

document.getElementById("generateButton").addEventListener("click", generateAndDisplayPassword);
