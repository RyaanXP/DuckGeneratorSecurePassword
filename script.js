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

const starsBg = document.getElementById("stars-bg");
const stars = [];

for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    starsBg.appendChild(star);
    stars.push(star);
}

starsBg.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    stars.forEach((star, index) => {
        const starX = star.getBoundingClientRect().left + star.clientWidth / 2;
        const starY = star.getBoundingClientRect().top + star.clientHeight / 2;
        const deltaX = mouseX - starX;
        const deltaY = mouseY - starY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const moveFactor = 50;

        star.style.transform = `translate(${deltaX / distance * moveFactor}px, ${deltaY / distance * moveFactor}px)`;
    });
});
