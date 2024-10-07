chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "processBlog") {
      console.log("Received blog text for processing:", request.text);
      let summary = summarizeText(request.text);  // Summarize the text
  
      // Store the summary in chrome.storage.local
      chrome.storage.local.set({ summary: summary }, function() {
        console.log("Summary stored successfully:", summary);
        sendResponse({ success: true });
      });
    }
    return true; // Keeps the message channel open for async response
  });
  
  // Simple summarization function: Summarizes the first 50 words
  function summarizeText(text) {
    return text.split(" ").slice(0, 50).join(" ") + "...";
  }
  
  
  