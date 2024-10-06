Frontend:

Built with ReactJS for a dynamic, responsive user interface.
Pages for browsing, adding, updating, and deleting recipes.
User authentication system integrated into the frontend.
Filtering options for searching recipes based on various criteria (e.g., ingredients, cuisine, preparation time).
Backend:

Developed using NodeJS to handle API requests and manage recipe data.
Routes to create, read, update, and delete recipes, with JWT-protected endpoints.
Database:

MongoDB as the primary database for storing recipe data.
Each recipe contains details like ingredients, instructions, preparation time, difficulty, and tags (e.g., vegan, gluten-free).
Authentication:

JWT authentication implemented to secure routes.
Logged-in users can create and manage their own recipes, while admin users may have broader access (e.g., managing all recipes).
Filtering:

Recipe filtering by different parameters such as ingredients, categories, cooking time, etc.
Ensures a user-friendly experience for recipe discovery.
UI Features:

Recipe details page with step-by-step instructions.
Recipe editing and deletion available for users with appropriate permissions.
Responsive design to support different devices.
Notifications:

Frontend notifications (possibly with tools like React Toastify) to inform users about successful or failed actions (e.g., recipe added, login error, etc.).
