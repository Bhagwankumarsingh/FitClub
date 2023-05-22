import React,{useRef} from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'

const Join = () => {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_62fi8s9', 'template_3tlpijn', form.current, '4qsHwGfnz4YP4R1jW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">

        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your Email address" />
            <button className="btn btn-j">join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
