# secure-nodejs-api
A Node.js Express API starter with JWT authentication, role-based access control, and user management endpoints. Includes sample route protection and middleware.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/YOUR_GITHUB_USERNAME/secure-nodejs-api.git
    cd secure-nodejs-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Copy the `.env.example` to `.env` and set your JWT secret, port, or DB config.
    - Example:
      ```
      JWT_SECRET=your_secret_key
      PORT=3000
      ```

4. Run the server:
    ```sh
    npm start
    ```
    - The API will be available on `http://localhost:3000` (or your configured port)

### API Endpoints (Sample)

| Route             | Method | Description                      |
|-------------------|--------|----------------------------------|
| `/login`          | POST   | Authenticate and get JWT token   |
| `/users`          | GET    | Fetch users (protected route)    |
| `/protected`      | GET    | Example of a restricted endpoint |

### Middleware

- `middleware/auth.js`: JWT auth check
- `middleware/role.js`: Role validation

## Contribution

Pull requests are welcome! For major changes, please open an issue first.

## License

[MIT](LICENSE)
