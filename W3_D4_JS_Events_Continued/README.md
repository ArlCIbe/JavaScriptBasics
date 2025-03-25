[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13939898&assignment_repo_type=AssignmentRepo)
# Javascript Events Continued

## Assignment: Aspen's Adventure Gallery
![Example](Example/Part1.gif)

This assignment involves creating an interactive image gallery page themed around Aspen, a golden retriever. Students will focus on using JavaScript for DOM manipulation to handle dynamic content and user interactions. This gallery features thumbnails which allow users to select and view full-size images from smaller previews.

### Instructions:

**Part 1: Thumbnail button functionality**

1. When a user clicks the "view" button on a thumbnail preview, make the thumbnail's image appear in the large display window above.

   - Write some javascript for each thumbnail button so that, when **clicked**, the image in the mainDisplay is changed

      - Use the 'document object' to select the element with an id of "mainDisplayImage" and assign it to a variable called "mainDisplayImageHTML"

      - Access the "src" property on the mainDisplayImageHTML variable and assign the file path of the thumbnail's image to it.

   <br>

**Part 2: Thumbnail button presentation**
<details>

   <summary>Preview</summary>
   <br>
   <img src="Example/Part2.gif" />
</details>

<br>

1. Make the view button hidden by default.

<br>

2. When a user hovers the mouse over a thumbnail, make the thumbnail's view button reappear.

   - use either CSS or javascript to achieve this