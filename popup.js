document.addEventListener('DOMContentLoaded', function() {
    // Fetch the summary from chrome.storage.local
    chrome.storage.local.get(['summary'], function(result) {
      console.log('Fetched summary:', result.summary);
      if (result.summary) {
        document.getElementById('summary').innerText = result.summary;
      } else {
        document.getElementById('summary').innerText = 'No summary available.';
      }
    });
  });
  
  
  