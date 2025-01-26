// Function to handle button click events
function selectOption(option) {
    if (option === 'I am yours 2/14 6pm-tbd') {
        // Display the cat-heart GIF for the "Yes" option
        displayGif('cat-heart.gif');
    } else if (option === 'I am yours 2/15 6pm-tbd') {
        // Display the cat-heart GIF for the "Maybe" option
        displayGif('cat-heart.gif');
    } else if (option === 'I am homosexual') {
        // Increase the size of the "Yes" and "Maybe" buttons
        enlargeButtons();
    }
}

// Function to display the specified GIF
function displayGif(gifSrc) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing content
    const gif = new Image();
    gif.src = gifSrc;
    gif.alt = 'GIF';
    gif.onload = function () {
        imageContainer.appendChild(gif);
        document.getElementById('options').style.display = 'none'; // Hide buttons
        // Update the text
        const questionElement = document.getElementById('question');
        questionElement.textContent = 'Delightful! Until our paths cross again.'; // Set the new text
        questionElement.style.fontFamily = "'Sacramento', cursive"; // Ensure the font matches
        questionElement.style.fontSize = '52px'; // Set the font size to match the original
    };
}


// Function to enlarge the "Yes" and "Maybe" buttons
function enlargeButtons() {
    const yesButton = document.getElementById('yes-button');
    const maybeButton = document.getElementById('maybe-button');
    const currentFontSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );
    const newSize = currentFontSize * 1.5; // Increase size by 50%
    yesButton.style.fontSize = `${newSize}px`;
    maybeButton.style.fontSize = `${newSize}px`;
}

// Display the initial cat GIF
function displayCat() {
    const imageContainer = document.getElementById('image-container');
    const catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat GIF';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Initialize the page with the initial GIF
displayCat();
