# Post Square

## Description
Post Square is an Angular application that fetches [100 posts](https://jsonplaceholder.typicode.com/posts) from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API and renders each post in a separate square component. The posts are displayed in a grid layout of 10 rows by 10 columns. By default, the title of each post is shown in the square. Upon clicking a square, the content of the square rotates through different properties of the post, such as userId, id, and body, with each click. Clicking any other square in the layout resets the previously clicked square to its default state. Only one square at a time displays details, and the id of the currently active post is shown at the top of the page.

## Dependencies
- Angular: ^17.0.0
- NgRx: ^17.2.0
- RxJS: ~7.8.0
- Tailwind CSS: ^3.4.3

## Running the Project
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal or command prompt.
3. Run `npm install` to install the project dependencies.
4. Start the development server by running `npm start`.
5. Open your web browser and navigate to `http://localhost:4200` to view the application.
