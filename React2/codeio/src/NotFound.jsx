import { Link } from "react-router-dom";
function NotFound(){
    return(
        <>
        <h2>Error 404 Page not found</h2>
        <a className="btn btn-danger" href="/">Home</a>
        <Link className="btn btn-primary" to="/">Back to Home</Link>
        <Link className="btn btn-primary" to="/login">Back to Login</Link>
        </>    
    );
}

export default NotFound