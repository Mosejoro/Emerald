// Load your JSON data (replace with your actual data loading logic)
const pdfData = [
    { "name": "Meet Me", "summary": "Meeting Invitation" },
    { "name": "Hello", "summary": "What" },
    { "name": "Kind", "summary": "Greeting Message" },
    { "name": "Life", "summary": "Greeting Message" },
    { "name": "Swim", "summary": "Greeting Message" },
    { "name": "Hope", "summary": "Greeting Message" },
    
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
        resultsDiv.innerHTML += `<p><b>${pdf.name}</b></p>`;
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
        const downloadLink = `<a href="Pdfs/${pdf.name}.pdf" target="_blank"><b>${pdf.name}</b></a>`;
        resultsDiv.innerHTML += downloadLink + '<br>'; // Add line break after each link
      }
    });
  } else {
    // ... (no results found message)
  }
  

});