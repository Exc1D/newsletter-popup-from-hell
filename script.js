const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const newsletterForm = document.getElementById("newsletterForm");
const modalInner = document.getElementById("modalInner");
const declineBtn = document.getElementById("declineBtn");
const buttonContainer = document.getElementById("buttonContainer");

//  Show the popup after 2 seconds (2000ms)
setTimeout(() => {
  popup.style.display = "flex";
}, 2000);

//  Add click event to close button to hide the popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

//  Add mouseenter event to decline button
declineBtn.addEventListener("mouseenter", () => {
  // When hovering over decline button, toggle a class on buttonContainer
  // that reverses the button order (you'll need to create this class in CSS)
  buttonContainer.classList.toggle("reverse-row");
});

//  Add submit event to the form
newsletterForm.addEventListener("submit", function (e) {
  // 1. Prevent default form submission
  e.preventDefault();
  // 2. Get form data using FormData
  const form = new FormData(newsletterForm);
  // 3. Extract the firstName from the form data
  const name = form.get("firstName");
  // 4. Show loading screen with spinner and text "Processing your subscription..."
  modalInner.innerHTML = `
      <div class="loading-screen">
         <div class="loading-spinner"></div>
         <p>Processing your subscription...</p>
      </div>
      `;

  // 5. After 1.5 seconds change the text
  setTimeout(() => {
    modalInner.innerHTML = `
      <div class="loading-screen">
         <div class="loading-spinner"></div>
         <p>Just kiddinng! Selling your data to the Dark Web...</p>
      </div>
      `;
  }, 1500);
  // 6. After 4 seconds total, show success message with the person's name
  //    and enable the close button
  setTimeout(() => {
    modalInner.innerHTML = `
      <div class="success-screen">
         <img class="success-gif" src="pirate.gif"/>
         <p>Purchase Successul! Thanks <span class="success-name">${name}</span>, you sucker!</p>
      </div>`;
  }, 5000);
  closeBtn.disabled = false;
});

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
