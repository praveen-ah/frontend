import { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

export const dataContext = createContext();

function Home() {

    const [posts, setPosts] = useState(null);

    const data ="DataData"

    const navigate = useNavigate();

    const controller = new AbortController();
    const signal = controller.signal;

    useEffect(() => {
            fetch('http://localhost:4000/posts', {signal})
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                setPosts(data);
            }).catch(err => {
                console.log(err);
            })
        // cleanup function
        return ()=>{
            console.log('Unmounted, cleaning up')
            controller.abort();
        }
    },[]);

    return (
        <div className="container">
            <Link to='/login'>Login</Link>

            <dataContext.Provider value={data}> 
               {/* <Login /> Commented*/}
            </dataContext.Provider>


            <div className="row justify-content-center m-3">
                {
                    posts && posts.map((post) => {
                        return (
                            <div key={post.id} className="card m-3" onClick={()=>{navigate('/post/'+post.id)}} style={{ width: '18rem' }}>
                                <div className="card-body">
                                    {/* <h5 className="card-title">{post.title}</h5> */}
                                    <p className="card-text">{post.content}</p>
                                </div>
                            </div>)
                    })}
            </div>
        </div>
    );
}

export default Home;