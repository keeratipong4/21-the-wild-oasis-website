# The Wild Oasis Client Version 🌲

The Wild Oasis Client Version is a web application that allows users to explore and book cozy cabins in a beautiful, remote location. It focuses on delivering a seamless booking experience, offering an intuitive interface and a fast, secure platform for users.

## Features ✨

- Browse Cabins: Users can explore available cabins in a remote and scenic location.
- Secure Authentication: Users can log in using their Google account via NextAuth for a safe and personalized experience.
- Quick Booking: The platform provides a straightforward booking process, making it easy to reserve cabins with just a few clicks.

## Tech Stack 🙌

- React: Provides a smooth, component-based structure, enhancing the user interface and experience.
- Next.js: Powers server-side rendering for faster page loads and improved performance.
- NextAuth: Handles secure authentication using Google, ensuring user data is safe and login is easy.

## How to Run the Project

### Prerequisites 🏁

Make sure you have the following installed:

- Node.js
- npm (or yarn)

### Installation ⬇️

1. Clone this repository:

```bash
git clone https://github.com/keeratipong4/17-the-wild-oasis.git
```

2. Navigate to the project directory:

```bash
cd the-wild-oasis-customer
```

3. Install the required dependencies:

```bash
npm install
```

4. Create a .env file and add the required environment variables for NextAuth (Google Client ID and Secret):

```bash
NEXTAUTH_URL=http://localhost:3000
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

5. Run the development server:

```bash
npm run dev
```

6. Open http://localhost:3000 to view the app in the browser.

The app is deployed on Vercel. You can check it out live at:  
[The Wild Oasis Website](https://wild-oasis-home-stay.vercel.app/)

## Contributing 🤝

If you’d like to contribute, feel free to submit a pull request or open an issue for any bugs or suggestions.

## Social 😃

Connect with me on [LinkedIn](https://www.linkedin.com/in/keeratipong-boonnapongkasem-99259527b/) if you have any questions or just want to chat about web development!
