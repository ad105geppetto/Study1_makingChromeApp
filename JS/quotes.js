const quotes = [
    {
        quote: 'The journey of a thousand miles begins with one step.',
        author: 'Lao Tzu'
    },
    {
        quote: 'That which does not kill us makes us stronger.',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: 'Life is what happens when you’re busy making other plans.',
        author: 'John Lennon'
    },
    {
        quote: 'When the going gets tough, the tough get going.',
        author: 'Joe Kennedy'
    },
    {
        quote: 'You must be the change you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West'
    },
    {
        quote: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.',
        author: 'Bil Keane'
    },
    {
        quote: 'What you do speaks so loudly that I cannot hear what you say.',
        author: 'Ralph Waldo Emerson'
    },
    {
        quote: 'Those who make you believe absurdities can make you commit atrocities.',
        author: 'Voltaire'
    },
    {
        quote: 'You can discover more about a person in an hour of play than in a year of conversation.',
        author: 'Plato'
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;