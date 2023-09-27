// Get references to form elements and the results section
const memeForm = document.getElementById('memeForm');
const resultsSection = document.getElementById('results');

// Function to generate a meme
function generateMeme(imageURL, textTop, textBottom) {
    // Create a meme container div
    const memeContainer = document.createElement('div');
    memeContainer.classList.add('meme-container');

    // Create a delete button for the meme
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    memeContainer.appendChild(deleteButton);

    // Create an image element for the meme
    const memeImage = document.createElement('img');
    memeImage.src = imageURL;
    memeContainer.appendChild(memeImage);
    memeImage.classList.add('meme-image');

    // Check if top text is provided
    if (textTop) {
        const topText = document.createElement('div');
        topText.classList.add('top-text');
        topText.textContent = textTop;
        memeContainer.appendChild(topText);
    }

    // Check if bottom text is provided
    if (textBottom) {
        const bottomText = document.createElement('div');
        bottomText.classList.add('bottom-text');
        bottomText.textContent = textBottom;
        memeContainer.appendChild(bottomText);
    }

    // Append the meme container to the results section
    resultsSection.appendChild(memeContainer);

    // Attach an event listener to the delete button
    deleteButton.addEventListener('click', function () {
        // Remove the meme container from the results section
        resultsSection.removeChild(memeContainer);
    });
}

// Event listener for form submission
memeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user inputs
    const imageURL = memeForm.elements.imageURL.value;
    const textTop = memeForm.elements.textTop.value;
    const textBottom = memeForm.elements.textBottom.value;

    // Generate and display the meme
    generateMeme(imageURL, textTop, textBottom);

});









