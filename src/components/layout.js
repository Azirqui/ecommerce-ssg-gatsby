import React from "react";

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>My Gatsby Blog</h1>
    </header>
    <main>{children}</main>
    <footer>
      <p>© {new Date().getFullYear()} My Gatsby Site</p>
    </footer>
  </div>
);

export default Layout;
