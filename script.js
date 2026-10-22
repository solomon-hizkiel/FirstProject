//I will add a button that add count the clicks.
document.addEventListener("click", function(event) {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
        // Get the current count from the button's text
        let count = parseInt(event.target.textContent) || 0;
        // Increment the count
        count++;
        // Update the button's text with the new count
        event.target.textContent = count;
    }
}   );

document.querySelector(".one").addEventListener("click", function() {
    // Change the text content to Solomon.
    const one = document.querySelector(".one");
    one.textContent = "Solomon";
    // Change the background color to blue.
    one.style.backgroundColor = "black";
    // Change the text color to white.
    one.style.color = "white";
    // Change the font size to 20px.
    one.style.fontSize = "20px";
    // Change the font weight to bold.
    one.style.fontWeight = "bold";
    // Change the font family to Arial.
    one.style.fontFamily = "Arial";
});