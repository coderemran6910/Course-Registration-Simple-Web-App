# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Answer to the Q: No:-1
## My project feature are:
1. Click the "Select" button to add a course to  registration.
2. The application will display an error if  reach the credit limit or try to select a course that's already added.
3. The sidebar will show selected courses, total credit hours, remaining credit limit, and total price.


# Answer to the Q: No:- 2
## Now i am Discuss how I managed the state in This project.

I have several state variables declared using the useState hook:
1. setCourseDetails([...courseDetails, course]): When a course is selected, it's added to the courseDetails array. I use the spread operator ... to create a new array with the selected course added.

2. setCourseCredit(newCredit): I update the courseCredit by adding the credit of the selected course to the current value.

3. setRemainingCredit(remaining): The remainingCredit is updated by subtracting the credit of the selected course from the maximum credit limit (20).

4. setTotalPrice(total): I update the totalPrice by adding the price of the selected course to the current total.
