
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {

    // Clear existing items
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Set the text
        listItem.textContent = "The number is " + i;

        // Add item to the list
        numberList.appendChild(listItem);
    }
}

generateBtn.addEventListener("click", generateNumbers);
