document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const fieldName = this.getAttribute('data-field');
        document.getElementById('popupLabel').textContent = fieldName;
        document.querySelector('.popup').style.display = 'flex';
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    document.getElementById('popupInput').value = ''; // Clear input on cancel
});

document.getElementById('okButton').addEventListener('click', function() {
    const inputValue = document.getElementById('popupInput').value;
    const fieldName = document.getElementById('popupLabel').textContent;

    // Find the corresponding card and replace the input value below the label
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.getAttribute('data-field') === fieldName) {
            // Check for existing input and replace it
            const existingValue = card.querySelector('.input-value');
            if (existingValue) {
                existingValue.textContent = inputValue; // Replace previous input
            } else {
                const label = document.createElement('p');
                label.textContent = inputValue;
                label.className = 'input-value'; // Add class for styling if needed
                card.appendChild(label);
            }
        }
    });

    // Hide the popup and clear the input field
    document.querySelector('.popup').style.display = 'none';
    document.getElementById('popupInput').value = ''; // Clear input after OK
});

// Add functionality for Submit All Inputs button
document.getElementById('submitAll').addEventListener('click', function() {
    // Add logic to handle all inputs here, e.g., sending to server or processing
    alert("All inputs submitted!"); // Placeholder for actual submit logic
});
