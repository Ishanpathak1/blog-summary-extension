// Attempt to extract the main article content
let blogText = "";

// Check if an <article> element exists and extract the content
let articleElement = document.querySelector('article');
if (articleElement) {
    blogText = articleElement.innerText;
} else {
    // Fallback: Try extracting from a common Medium structure if <article> is not found
    blogText = document.body.innerText;
}

// Log the extracted blog content to verify
console.log("Extracted blog text:", blogText);

// Send the extracted blog content to the background script for processing
chrome.runtime.sendMessage({
    action: "processBlog",
    text: blogText
}, function(response) {
    console.log("Message sent to background script, response:", response);
});




