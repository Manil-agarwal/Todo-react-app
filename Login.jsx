import React, { useState } from "react";



function Login() {

  const[form, setform]= useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);
  const handleChange = (e) => {
    setform({...form,[e.target.name]: e.target.value})
  };

  const handleSubmit = async() =>{
    const result = await Login(form);
    console.log("form",result);
  };

    return (
      <div className= "container">
        <div className= "row justify-content-center mt-4">
        <div className= "col-lg-5 card border-primary mt-4">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Login Now</h4><div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">
        Email Or Username
        </label>
        <input 
        type="email" 
        onChange={handleChange}
        name="username"
        className="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or Username" />

        <small id="emailHelp" 
        className="form-text text-muted">
        We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">
        Password
        </label>
        <input 
        type="Password" 
        onChange={handleChange}
        name = "password"
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        placeholder="Enter Password" />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <button type="button" onClick= {handleSubmit} class="btn btn-primary">Login</button>
        </div>   
        </div>
        </div>
      </div> 
    );

}
export default Login;
  
  