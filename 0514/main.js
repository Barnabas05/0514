// script.js

document.getElementById('lengthRange').addEventListener('input', function() {
    document.getElementById('lengthValue').textContent = this.value;
});

document.getElementById('generateButton').addEventListener('click', generatePassword);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

function generatePassword() {
    const length = document.getElementById('lengthRange').value;
    const includeLower = document.getElementById('lowercase').checked;
    const includeUpper = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (includeLower) allChars += lower;
    if (includeUpper) allChars += upper;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('passwordDisplay').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('passwordDisplay');
    passwordField.select();
    document.execCommand('copy');
    alert('Jelszó vágólapra másolva!');
}
