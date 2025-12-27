import React from "react";
import imgURL from "../assets/404-error.gif";

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <img src="{imgURL}" alt="404 error gif" className="page-img" />
    </div>
  );
}
export default ErrorPage;
