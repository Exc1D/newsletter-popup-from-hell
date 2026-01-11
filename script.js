const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const newsletterForm = document.getElementById("newsletterForm");
const modalInner = document.getElementById("modalInner");
const declineBtn = document.getElementById("declineBtn");
const buttonContainer = document.getElementById("buttonContainer");

// TODO: Show the popup after 2 seconds (2000ms)

// TODO: Add click event to close button to hide the popup

// TODO: Add mouseenter event to decline button
// When hovering over decline button, toggle a class on buttonContainer
// that reverses the button order (you'll need to create this class in CSS)

// TODO: Add submit event to the form
// 1. Prevent default form submission
// 2. Get form data using FormData
// 3. Extract the firstName from the form data
// 4. Show loading screen with spinner and text "Processing your subscription..."
// 5. After 2 seconds change the text to "Adding you to our mailing list..."
// 6. After 4 seconds total, show success message with the person's name
//    and enable the close button

/*
        CHALLENGES:
        
        1. Make the popup appear 2 seconds after page load
        
        2. Make the close button (X) hide the popup when clicked
        
        3. In CSS, create a class called "reverse-buttons" that uses 
           flex-direction to reverse the order of the buttons
        
        4. Toggle the "reverse-buttons" class on the button container 
           when the user hovers over the "No Thanks" button
        
        5. Handle the form submission:
           - Prevent the default form behavior
           - Get the form data using FormData
           - Extract the firstName value
           - Show a loading screen with the message "Processing your subscription..."
           - After 2 seconds, update the message to "Adding you to our mailing list..."
           - After 4 seconds total, show a success message that includes the user's name
           - Enable the close button
        
        BONUS: Add your own creative touches to the success message!
        */
