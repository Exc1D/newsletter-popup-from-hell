# HTML Breakdown: Newsletter Popup from Hell

- inside the body is a main tag and a div

- main tag has a class of main-content and contains the following elements inside:

  - h1 - Content: Master Web Development in 2026!
  - p - Content: Join thousands of developers learning the latest technologies and landing their dream jobs!
  - ul - list of offers (has a class of feature-list)
  - 4 li - has a class of feature-item and feature-purple/blue/green/orange. Contents:
    - Exclusive coding tutorials
    -  Career guidance from experts
    -  Weekly coding challenges
    -  Free resources and ebooks
  - p - Subscribe to our newsletter and get instant access to premium content that will accelerate your coding journey!

- div tag has a class of popup-modal and id of popup . Contains the following elements:

  - div - outer container (has a class of modal-content)

  - button - has a class of close-btn and id of closeBtn and is disabled by default

  - div - inner container has a class of modal-inner and an id of modalInnerwhich contains the following elements:

    - h2 - Content:  Special Offer!

    - p -  Content: Don't miss out! Subscribe to our newsletter and get exclusive access

      ​            to premium coding tutorials, job interview tips, and weekly

      ​            challenges. Enter your details below!

    - form - has an id of newsletterForm which contains the following elements:

      - input - for name (type=text, name=firstName, placeholder, required)
      - input - for email (type=email, name=email, placeholder, required)
      - div -  has a class of button-container and id of buttonContainer which also contains the following elements:
        - button - Content: Subscribe Now! (type=submit class= btn btn-submit)
        - button - Content: No Thanks(type=button class=btn btn-decline id=declineBtn)