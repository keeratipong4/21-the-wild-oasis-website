# The Wild Oasis 🌲 (for online guests)

The Wild Oasis (for online guests) is a web application that allows online users to explore and book cabins. This is a demo version for educational purpose based on **The Ultimate Reacty.js** course on **Udemy** by **Jonas Schmedtmann**.

Besides, there is another application with same name also called **The Wild Oasis**, but it's a completely different project made for hotel staff. Click here to visit the other project [**The Wild Oasis (for hotel staff)**](https://wild-oasis-for-employee.vercel.app/)

## Features ✨

- Browse Cabins: Users can explore available cabins in a remote and scenic location.
- Secure Authentication: Users can log in using their Google account via NextAuth for a safe and personalized experience.
- Quick Booking: The platform provides a straightforward booking process, making it easy to reserve cabins with just a few clicks.

## Tech Stack🛠️

- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" width="30"/> **React.js** provides a smooth, component-based structure, enhancing the user interface and experience.
- [![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/) **Next.js** powers server-side rendering for faster page loads and improved performance.
- <img src="https://next-auth.js.org/img/logo/logo-sm.png" alt="NextAuth.js" width="20"/> **NextAuth.js** handles secure authentication using Google, ensuring user data is safe and login is easy.Handles secure authentication using Google, ensuring user data is safe and login is easy.

## How to Run the Project

### Prerequisites 🏁

Make sure you have the following installed:

- Node.js
- npm (or yarn)

### Installation ⬇️

1. Clone this repository:

```bash
git clone https://github.com/keeratipong4/21-the-wild-oasis-website.git
```

2. Navigate to the project directory:

```bash
cd 21-the-wild-oasis-website
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

Connect with me on [my portfolio](https://www.keeratipong.com/)
