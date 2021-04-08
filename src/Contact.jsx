import React from "react";
import Navbar from "./Navbar";



const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className ="my-5">
            <h1 className ="text-center">Contact Us</h1>
        </div>
        <div className = "container contact_div">
            <div className = "row">
                <div className = "col-md-6 col-10 mx-auto">
                    <form action="https://formspree.io/f/xrgrzygd"  method="POST" id="formnew">
                    <div className="mb-3">
  <label for="fname" name="fname" className="form-label" >Your Full Name</label>
  <input type="text" className="form-control" id="fname" name="fname" placeholder="Jhon Clen" required/>
</div>
<div className="mb-3">
<label for="email" className="form-label">Email-</label>
<input type="email" className="form-control"  id="email" name="email" placeholder="name@example.com "required/>
 
<label for="phone" className="form-label">Phone no-</label>
<input type="number" className="form-control" id="phone" name="phone" maxlength="10" placeholder="1234567890"/>

<label for="message" name="message" className="form-label">Your Message</label>
  <textarea className="form-control" id="message" name="message" rows="3"></textarea>
</div>
<div className = "mt-3">
                         <button type="submit" className="btn-get-started1">Submit</button>
                     </div>
                        
                    </form>
                </div>
            </div>
        </div>

        </>
    );

};

export default Contact;