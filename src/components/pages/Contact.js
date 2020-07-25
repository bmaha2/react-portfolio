import React from "react";


function Contact() {
  return (
    <>
      
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-3 border-0">
              <div className="card-header">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
        </div>{/*!--end of header-->*/}
        <form>
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label htmlFor="formControlInput">Email address</label>
            <input type="email" className="form-control" id="formControlInput" placeholder="example@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="submit">
            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
          </div>
        </form>{/*<!--end of form-->*/}
      
      
        </>
  );
}

export default Contact;
