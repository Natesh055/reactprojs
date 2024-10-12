import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import catimg from '../public/cat.jpg'
import Contact from "./contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contact-container">
        <Contact
          image={catimg}
          name="Mr. Vijay Singh Pundir"
          phone="(91)9717797341"
          email="vijay1044@gmail.com"
        />
        <Contact
          image={catimg}
          name="Mrs. Ranjana Pundir"
          phone="(91)7982980275"
          email="ranjanapundir90@gmail.com"
        />
        <Contact
          image={catimg}
          name="Mrs. Shubhangi Vrindha Singh"
          phone="(91)9319820711"
          email="jdnfkjsdnf@gmail.com"
        />
        <Contact
          image={catimg}
          name="Mr. Natesh Singh Pundir"
          phone="(91)9971052173"
          email="singhnatesh50@gmail.com"
        />
      </div>
    </>
  );
}

export default App;
