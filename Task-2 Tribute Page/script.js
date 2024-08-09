document.addEventListener('DOMContentLoaded', function() {
    const timelineEvents = [
        { year: 1879, event: "Born in Ulm, Germany" },
        { year: 1894, event: "Moves with his family to Italy and then to Switzerland" },
        { year: 1902, event: "Graduates from the Swiss Federal Polytechnic School" },
        { year: 1905, event: "Publishes his special theory of relativity" },
        { year: 1915, event: "Publishes his general theory of relativity" },
        { year: 1919, event: "Confirmed as the greatest physicist of his time when his general theory of relativity is verified by observations during a solar eclipse" },
        { year: 1921, event: "Awarded the Nobel Prize in Physics" },
        { year: 1933, event: "Emigrates to the United States to escape the Nazi regime in Germany" },
        { year: 1939, event: "Writes a letter to President Roosevelt warning him about the possibility of Nazi Germany developing an atomic bomb" },
        { year: 1955, event: "Dies in Princeton, New Jersey, USA" }
    ];

    const timelineList = document.getElementById('timelineList');
    timelineEvents.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.year}: ${item.event}`;
        timelineList.appendChild(li);
    });

    const quotes = [
        "The true sign of intelligence is not knowledge but imagination.",
        "I have no special talent. I am only passionately curious.",
        "The only reason for time is so that everything doesn't happen at once.",
        "Imagination is more important than knowledge.",
        "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
    ];

    const quoteElement = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote}" - Albert Einstein`;

    // Add image color change on hover
    const einsteinImage = document.getElementById('einstein-image');
    
    einsteinImage.addEventListener('mouseover', function() {
        this.style.filter = 'grayscale(50%) sepia(50%)';
    });

    einsteinImage.addEventListener('mouseout', function() {
        this.style.filter = 'none';
    });
});

