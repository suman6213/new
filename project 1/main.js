const dynamictext = document.querySelector(".text-word");
const word = ["Light.", "Liberty.", "Learning."];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = word[wordIndex];
    const curreChar = currentWord.substring(0, charIndex);
    dynamictext.textContent = curreChar;
    dynamictext.classList.add("stop-blink");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200)
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100)
    } else {
        isDeleting = !isDeleting;
        dynamictext.classList.remove("stop-blink")
        wordIndex = !isDeleting ? (wordIndex + 1) % word.length : wordIndex;
        setTimeout(typeEffect, 1200)
    }
}

typeEffect();
