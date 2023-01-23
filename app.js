//Variables

let btn = document.querySelector('#newquote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{ 
    quote: "I have not failed. I've just found 10,000 ways that won't work.", 
    person: "Thomas Edison" 
},  { 
    quote: "In three words I can sum up everything I've learned about life: it goes on.", 
    person: "Robert Frost" 
},  { 
    quote: "The best way to predict your future is to create it.", 
    person: "Abraham Lincoln" 
},  { 
    quote: "Be the change that you wish to see in the world.", 
    person: "Mahatma Gandhi" 
},  { 
    quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", 
    person: "Christian D. Larson" 
},  { 
    quote: "I can accept failure, everyone fails at something. But I can't accept not trying.", 
    person: "Michael Jordan" 
},  { 
    quote: "It does not matter how slowly you go as long as you do not stop.", 
    person: "Confucius" 
},  { 
    quote: "The only limit to our realization of tomorrow will be our doubts of today.", 
    person: "Franklin D. Roosevelt" 
},  { 
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
    person: "Winston Churchill" 
},  { 
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", 
    person: "Steve Jobs" 
}];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})