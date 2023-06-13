# Trybesmith project

Hello! Welcome to the Trybesmith project repository. In this project, you will create a medieval item shop in the form of an API using Typescript. Through this application, it will be possible to perform basic operations of a database, such as creating, reading, updating and deleting records (CRUD - Create, Read, Update, Delete).

You will develop all layers of the application (Models, Service and Controllers) and will use MySQL as a database.

## Mandatory Requirements Developed

1. I created the endpoint for registering products, accessible via the path `/products`. The shipped products are saved in the `products` database table. The endpoint receives the JSON structure containing the product name and quantity.

2. I created the endpoint for the product listing, accessible via the `/products` path.

3. I created the endpoint for registering users, accessible via the `/users` path. Information on registered users is saved in the `users` table in the database. The endpoint receives the JSON structure containing the username, profession, level and password.

4. I created the endpoint to list all the orders, accessible through the `/orders` path. This route returns all orders and the product IDs associated with them.

5. I created the endpoint for the login of users, accessible through the `/login` path. The route receives the username and password fields, which are validated against the database. A JWT token is generated and returned on successful login, containing the ID and username in the payload.

Bonus Requirements

6. I implemented product validations, performing the necessary validations on the product registration endpoint of requirement 1.

7. I implemented the validations of the users, performing the necessary validations in the user registration endpoint of requirement 3.

8. I created the endpoint for registering an order, accessible via the `/orders` path. An order can only be created if the user person is logged in and the JWT token is valid. Submitted orders are saved in the `orders` database table, including the user ID of the person who placed the order. The `products` table is also updated by adding the product IDs to the requisition's `productsIds` key and adding the order ID to those products.

Thanks for checking out my Trybesmith project. Now you have an API for the medieval items store, with support for registering products, users and orders. Use the endpoints to perform CRUD operations on the database and take advantage of the additional functionality implemented. If you have any questions or need help, I'm here to help.
