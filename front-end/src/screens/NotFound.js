import { Link } from "react-router-dom";
import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";

function NotFound() {
  return (
    <section className="section notfound">
      <div className="fourohhfour">4<AiTwotoneSetting className="wheel rotate-center"/>4 </div>
      <div className="text">We're sorry, but the page you were looking for doesn't exist</div>
      <Link href="/" className="btn button home"> Go to home</Link>
    </section>
  );
}

export default NotFound;
