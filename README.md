# The Wild Oasis 🌲 (for online guests)

The Wild Oasis (for online guests) is a web application that allows online users to explore and book cabins. This is a demo version for educational purposes based on [**The Ultimate Reacty.js**](https://shorturl.at/m3qIS) course on **Udemy** by [**Jonas Schmedtmann**](https://www.udemy.com/user/jonasschmedtmann/).

Click here to visit the [live demo](https://wild-oasis-home-stay.vercel.app/) of this application deployed on Vercel.
Besides, there is another application with the same name also called **The Wild Oasis**, but it's a completely different project made for hotel staff to manage the same hotel of this application. Click here to visit the other project [**The Wild Oasis (for hotel staff)**](https://wild-oasis-for-employee.vercel.app/).

## Implementation 🛠️

This section provides an overview of the key implementations and functionalities developed in this project.

### 1. User Authentication

- **NextAuth.js** is used to handle user authentication.
- Users can log in using their Google accounts.
- Secure authentication ensures user data is protected.

### 2. Cabin Browsing

- Users can browse through a list of available cabins.
- Each cabin displays detailed information including images, descriptions, and pricing.
- The cabin data is fetched from a mock API for demonstration purposes.

### 3. Booking System

- Users can book cabins directly through the application.
- The booking process is streamlined to be quick and user-friendly.
- Booking data is stored in a mock database for demonstration purposes.

### 4. Responsive Design

- The application is designed to be fully responsive.
- It provides an optimal viewing experience across a wide range of devices, from desktop computers to mobile phones.

### 5. Server-Side Rendering

- **Next.js** is used to implement server-side rendering.
- This improves the performance and SEO of the application by pre-rendering pages on the server.

### 6. State Management

- **React.js** is used for building the user interface.
- State management is handled using React's built-in hooks such as `useState` and `useEffect`.

### 7. Environment Configuration

- Environment variables are used to manage sensitive information such as API keys and authentication secrets.
- A `.env` file is used to store these variables securely.

### 8. Deployment

- The application is deployed on Vercel.
- Continuous deployment is set up to automatically deploy changes pushed to the main branch.

This project demonstrates a full-stack web application with a focus on user authentication, booking functionality, and responsive design.

## Tech Stack 🛠️

- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" width="30"/> **React.js** provides a smooth, component-based structure, enhancing the user interface and experience.
- [![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/) **Next.js** powers server-side rendering for faster page loads and improved performance.
- <img src="https://next-auth.js.org/img/logo/logo-sm.png" alt="NextAuth.js" width="20"/> **NextAuth.js** handles secure authentication using Google, ensuring user data is safe and login is easy.

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

4. Create a `.env` file and add the required environment variables for NextAuth (Google Client ID and Secret):

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   AUTH_GOOGLE_ID=your_google_client_id
   AUTH_GOOGLE_SECRET=your_google_client_secret
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

The app is deployed on Vercel. You can check it out live at:  
[The Wild Oasis Website](https://wild-oasis-home-stay.vercel.app/)

## Contributing 🤝

If you’d like to contribute, feel free to submit a pull request or open an issue for any bugs or suggestions.

## Social 😃

Connect with me on [my portfolio](https://www.keeratipong.com/)
