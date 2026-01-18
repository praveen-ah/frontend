import { useState } from "react"
import { Link } from "react-router-dom";
import Counter from "./Counter";

function Login() {

    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");  
    const [same, setSame] = useState(true);

    function handlePwd1Change(event){
        setPwd1(event.target.value);
    }

    function handlePwd2Change(event){
        setPwd2(event.target.value);
        if(pwd1 == event.target.value){
            console.log("Same");
            setSame(true);
        }
        else{
            console.log("Different");
            setSame(false);
        }
    }

    return (
        <>
            {/* <Counter /> ->Commented*/}
            <Link to='/'>Home</Link>
            <form className="my-5" style={{width:"50%", margin:"auto"}}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Re-enter Password</label>
                    <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control"/>
                </div>
                {!same && <p className="text-danger">Passwords do not match</p>}
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label" >I Agree</label>
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </>
    )

}
export default Login


//npx json-server --watch data/db.json --port 4000 --static ./data