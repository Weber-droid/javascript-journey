document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.querySelector(".quote-text");
    const newQuoteBtn = document.getElementById("new-quote-btn");
    const shareBtn = document.getElementById("share-btn");

    // Function to fetch a random quote from favqs API
    async function getQuote() {
        try {
            const response = await fetch("https://favqs.com/api/qotd");
            const data = await response.json();
            return data.quote.body;
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    }

    // Function to update the quote text on the page
    async function updateQuote() {
        const quote = await getQuote();
        quoteText.textContent = quote;
    }

    // Event listener for the New Quote button
    newQuoteBtn.addEventListener("click", updateQuote);

    // Function to share the current quote on Twitter
    function shareOnTwitter() {
        const quote = quoteText.textContent;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
        window.open(twitterUrl, "_blank");
    }

    // Event listener for the Share on Twitter button
    shareBtn.addEventListener("click", shareOnTwitter);

    // Initial call to fetch and display a random quote
    updateQuote();
});