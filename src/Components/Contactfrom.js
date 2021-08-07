import React from "react";
import { useState } from "react";

const Contactfrom = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, password, message } = user;
        if(name && email && password && message){
            const res = fetch(
                "https://reactfrom-d6fd4-default-rtdb.firebaseio.com/reactfrom.json",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    password,
                    message,
                  }),
                }
              );
              if (res) {
                  setUser({
                    name: "",
                    email: "",
                    password: "",
                    message: "",
                  });
                  alert("Data SucessFully Stored");
                }
    
      
  }else{
      alert("Plz Fill The  All Data ")
  }
};

//  2nd Bar
//   const PostData = async (e) => {
//     e.preventDefault();
//     const { name, email, password, message } = user;
//     if(name && email && password && message){
//         const res = fetch(
//             "https://reactfrom-d6fd4-default-rtdb.firebaseio.com/reactfrom.json",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 name,
//                 email,
//                 password,
//                 message,
//               }),
//             }
//           );
//           if (res) {
//               setUser({
//                 name:"",
//                 email:"",
//                 password:"",
//                 message:"",
//               });
//               alert("Data SucessFully Stored");
//             }
//     }else{
//           alert("Plz Fill The Data");
//     }
    

//   };

  return (
    <>
    <h1 className="text-center mt-3">Contacts From</h1>
      <div className="container w-50 mt-5">
        <form>
          <div className="form-group">
            <label for="exampleInput">Name:-</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address:-</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Massage</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="message"
              value={user.message}
              onChange={handleInputs}
              placeholder="Write Something.."
              rows="3"
            ></textarea>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input "
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-success" onClick={PostData}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contactfrom;
