function countVowel() {
    let text = document.querySelector("#text").value;
    let vowelCount = 0;

    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (isVowels(char)) {
            vowelCount++;
        }
    }

    const result = document.querySelector("p");
    result.textContent = `Total Vowels : ${vowelCount}`;
}
function isVowels(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}