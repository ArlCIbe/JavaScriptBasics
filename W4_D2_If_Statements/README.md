[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14041377&assignment_repo_type=AssignmentRepo)
# If-statements

## Assignment: OnlyCats

In this assignment, you will become more familiar with if-statments and conditonal logic by obscuring content on a webpage for users under a certain age.
![Example](Example/Part1.gif)

### Instructions

**Age Input**
1. Make the age-gate element disappear when a user inputs an age that is 18 or above. Display a message telling them to exit the website when a     user inputs an age that is less than 18.

    - When a user submits their age, determine if it is equal to or greater than the number 18 and save the answer to a variable called "userIsAdult"
    
      - When a user clicks the "submit" button, grab the value that is present in the input element and assign it to a new variable called "userAge"
        
        - Use the document object to select the input element by its id and assign it to a new variable called "ageInputHTML"

        - Access the "value" property on the ageInputHTML variable and assign it to a new variable called "userAge"

      - Use a comparison operator to determine if the value of userAge is greater-than or equal-to to the number 18. Save the result of the comparison to a new variable called "userIsAdult"
  
    - If the value of the userIsAdult variable is equal to true, remove the age-gate element from view by changing its display css-attribute.

      - Create an "if-statement" that will hide the age-gate element on the page only if the userIsAdult variable is equal to true

        - if userIsAdult equals true, hide the age-gate element by [changing its display css-attribute to "none"](https://www.w3schools.com/jsref/prop_style_display.asp)
  
    - If the value of the userIsAdult variable is equal to false, display the message "You are too young to proceed. Please leave." inside the age-gate element.
    
      <details>
      <summary>Preview</summary>
      <img src="./Example/Part2.gif" width=400>
      </details>

      - Create an "if-statement" that will display the message only if the userIsAdult variable is equal to false

          - If the userIsAdult variable is equal to false, use the document object to select the child element of the age-gate element by its id and assign it to a new variable called "ageGateContentHTML"

          - Access the innerHTML property on the ageGateContentHTML variable and assign it a string value of "\<h1\>You are too young to proceed. Please leave.</h1\>"

**Strech Goal: A child's place**
1. Redirect the user to the PBS kids website if they input an age that is 13 or less
   - [Use the window object to achieve this](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp)  
      

    

Take a look at Example.gir to see what the end result should look like.