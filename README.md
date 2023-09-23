# Course Roster React Template

Live LInk : [https://silly-profiterole-27638f.netlify.app/] (https://silly-profiterole-27638f.netlify.app/)

### 3 Project features

- Can not add multiple courses in the cart, it will show a warning.
- If Credit Hours are more than 20, more courses cannot be added. 
- By default total Credit Hours are 20 and it's automatically deducted when adding a course to the cart.

### Questions 2 : Discuss how managed the state in this project

"In this simple React application, I manage state primarily using the useState hook. Here's how I handle different aspects of state:

Selected Courses: I maintain an array called selectedItem to keep track of the courses selected by the user. When a course is selected, it is added to this array.

Total Hours: The totalHours state variable represents the total credit hours of the selected courses. Whenever a course is selected, I update this value accordingly.

Total Price: I use the totalPrice state variable to keep track of the total cost of the selected courses. Similar to totalHours, it gets updated whenever a course is added.

Remaining Hours: The remaningHours state variable represents the remaining credit hours that a user can select. I calculate this by subtracting totalHours from a maximum value of 20.

Whenever a user selects a course, I validate if it's already in the cart or if the selected courses exceed the 20-hour limit. If there are any issues, I display toast notifications to provide feedback to the user.

Overall, this straightforward state management approach allows users to select courses, see their total hours and price, and receive notifications when they exceed the credit hour limit or attempt to add a duplicate course."

This how I managing state in this simple template. 