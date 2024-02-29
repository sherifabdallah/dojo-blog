# React Dojo-Blog App

This is a small React.js application for creating and managing small blogs. Users can write new blog posts, edit existing ones, and delete posts they no longer need. This application is designed to be simple and straightforward, making it easy for users to get started with creating their own blog content.

## Features

- **Create New Blog Posts:** Users can create new blog posts by filling out a form with the title and content of the post.
- **Edit Existing Posts:** Users can edit the title and content of existing blog posts.
- **Delete Posts:** Users can delete blog posts they no longer wish to keep.
- **Responsive Design:** The application is designed to work seamlessly on desktop and mobile devices.

## Technologies Used

- **React.js:** The front-end of the application is built using React.js, a popular JavaScript library for building user interfaces.
- **CSS:** Styling is done using CSS for a clean and modern look.
- **JSON Server:** Simulates a backend server for managing blog posts data.
- **LocalStorage:** Backup data storage in case the JSON Server is not available.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Start the JSON Server:
    ```bash
    json-server --watch db.json --port 8000
    ```
5. In a separate terminal window, run `npm start` to start the development server.
6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Creating a New Blog Post:** Click on the "New Blog" button, fill out the form with the title and content of your post, then click "Submit".
- **Deleting a Post:** Click on the "Delete" button next to the post you wish to delete, then confirm the action.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
