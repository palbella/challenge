# REACT CHALLENGE

## REACT - REDUX - TYPESCRIPT

Note: run npm install for new packages

### Complete all these steps to finish the challenge. Please use clean code and best practices as we will take it into consideration.

1. Write a custom React hook that manages the dispatch of Redux actions for a to-do list application. The hook should accept a Redux store as an argument and return a callback function for each of the following actions and the list of to-dos:

- addTodo: adds a new to-do item to the list
- toggleTodo: marks a to-do item as complete or incomplete
- removeTodo: removes a to-do item from the list

2. Write a Redux reducer that manages the state for the to-do list application (we would appreciate if you youe redux-toolkit). The reducer should handle the actions dispatched by the custom hook from step 1.

3. Convert the Redux reducer from step 2 to a generic reducer that can be used with any type of data (not just to-do items).

4. Write a list of to-do items connected to the hook.

5. Write a test using Jest that verifies the behavior of the custom hook and the generic reducer from steps 1 and 3. The test should include test cases for each of the actions supported by the hook and reducer.

6. Write a TypeScript interface that defines the shape of the state managed by the generic reducer.

7. Use the interface from step 5 to type-check the reducer and ensure that it adheres to the expected shape.

8. Upload your code to a github repository
