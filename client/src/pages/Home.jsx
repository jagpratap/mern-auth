export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-3xl  font-bold text-slate-800">
        Welcome to my Auth App!
      </h1>
      <p className="mb-4 text-slate-700">
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and log out, and provides access to
        protected routes only for authenticated users.
      </p>
      <p className="mb-4 text-slate-700">
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
      </p>
      <p className="mb-4 text-slate-700">
        This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack.
      </p>
    </div>
  );
}
