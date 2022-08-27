const quoteText = document.querySelector('.quote');
const authorName = document.querySelector('.author .name');
const quoteBtn = document.querySelector('button');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const fbBtn = document.querySelector('.facebook');

function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading Quote...';

    const api = 'https://api.quotable.io/random'
    fetch(api)
        .then(res => res.json())
        .then(result => {
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerText = 'New Quote';
            quoteBtn.classList.remove('loading');
        })
}

soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText);
    copyBtn.classList.add('active');
    
    setTimeout(() => {
        copyBtn.classList.remove('active');
    }, 1000);
})

quoteBtn.addEventListener('click', randomQuote)