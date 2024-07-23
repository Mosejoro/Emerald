// Load your JSON data (replace with your actual data loading logic)
  const pdfData = [
      { "name": "Battlefield", "summary": "Meeting Invitation" },
      { "name": "Believer's Authority", "summary": "What" },
      { "name": "Confident Woman", "summary": "Greeting Message" },
      { "name": "Faith work by Love", "summary": "Greeting Message" },
      { "name": "Healing Scriptures", "summary": "Greeting Message" },
      { "name": "Peace by Joyce Meyer", "summary": "Meyer" },
      { "name": "How you can be led", "summary": "Greeting Message" },
      { "name": "Living Beyond Feelings", "summary": "Greeting Message" },
      { "name": "Power of Vision", "summary": "Greeting Message" },
      { "name": "Power Thought", "summary": "Greeting Message" },
      { "name": "Purpose and Power of Love", "summary": "Greeting Message" },
      { "name": "Rediscovering the Kingdom", "summary": "Greeting Message" },
      { "name": "Understanding  the Purpose and Power of Prayer", "summary": "Greeting Message" },
      
    // ... (your other PDFs)
  ];
  
  // Search function triggered by form submission
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const searchTerm = document.getElementById('search-term').value.toLowerCase(); // Make search case-insensitive
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = ''; // Clear previous results
  
    let resultsFound = false;
  
    // Loop through each PDF data
    pdfData.forEach(function(pdf) {
      const pdfName = pdf.name.toLowerCase();
      const summary = pdf.summary.toLowerCase();
  
      // Check if search term exists in name or summary
      if (pdfName.includes(searchTerm) || summary.includes(searchTerm)) {
        resultsFound = true;
        resultsDiv.innerHTML += `<b>${pdf.name}</b>`;
      }
    });
  
    if (!resultsFound) {
      resultsDiv.innerHTML ='<div>Unavailable.</div>';
    }
   // ... (previous search logic)

if (resultsFound) {
    resultsDiv.innerHTML = ''; // Clear previous results
    pdfData.forEach(function(pdf) {
      const pdfName = pdf.name.toLowerCase();
      const summary = pdf.summary.toLowerCase();
      if (pdfName.includes(searchTerm) || summary.includes(searchTerm)) {
        // Create download link with PDF name and path
        const downloadLink = `<a class="B" href="Pdfs/${pdf.name}.pdf" target="_blank"><b>${pdf.name}</b></a>`;
        resultsDiv.innerHTML += downloadLink + '<br>'; // Add line break after each link
      }
    });
  } else {
    // ... (no results found message)
  }
  

});

// For Small ones
// For Small ones