// When the 'upload-sample' button is clicked, this triggers the hidden file input
document.getElementById('upload-sample').addEventListener('click', function() {
    document.getElementById('file').click(); // Open the file selection dialog
});

// Handle form submission when the 'upload-form' is submitted
document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    let formData = new FormData(this); // Create a FormData object with the form's input data

    // Send the form data to the server using the POST method
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Parse the server response as JSON
    .then(data => {
        // Display the classification result on the webpage
        document.getElementById('result').innerText = 'Sample = ' + data.result;
        displayRecycleInfo(data.result); // Call the function to show recycling information

        // Add animation when showing the result and recycle info
        document.getElementById('result').classList.add('show'); 
        document.getElementById('recycle-info').classList.add('show'); 
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors that occur during the request
    });
});

// Function to display recycling information based on the classification result
function displayRecycleInfo(result) {
    let infoText = "";
    
    // Determine the correct recycling information based on the classification result
    switch(result) {
        case 'Battery':
            infoText = "Batteries should never be thrown in regular trash! Find a battery recycling center near you to dispose of it safely.";
            break;
        case 'Biological':
            infoText = "Consider composting biological waste to enrich your garden's soil. If not, ensure it is disposed of properly to avoid contamination.";
            break;
        case 'Glass':
            infoText = "Glass is 100% recyclable! Make sure to clean it before recycling and avoid mixing it with other materials.";
            break;
        case 'Cardboard':
            infoText = "Cardboard can be recycled multiple times. Flatten it and ensure it’s clean before placing it in the recycling bin.";
            break;
        case 'Metal':
            infoText = "Metals like aluminum and steel can be recycled indefinitely. Rinse off any food residue and recycle them for a greener planet.";
            break;
        case 'Paper':
            infoText = "Paper products can be recycled, but be sure it’s clean and dry. Avoid recycling wet or contaminated paper.";
            break;
        case 'Plastic':
            infoText = "Plastic recycling helps reduce pollution. Check for the recycling symbol and ensure the plastic is clean before recycling.";
            break;
        case 'Shoes':
            infoText = "Consider donating gently used shoes to charities or drop them off at a recycling center that accepts footwear.";
            break;
        case 'Trash':
            infoText = "This item is contaminated and should not be recycled. Dispose of it properly to avoid spreading pollution.";
            break;
        case 'Clothes':
            infoText = "Clothing can be reused or recycled into new fabrics. Donate or recycle to reduce textile waste.";
            break;
        default:
            infoText = "Recycle responsibly!"; // Default message if result does not match any case
    }

    // Display the appropriate recycling information
    document.getElementById('recycle-info').innerText = infoText; 
}
