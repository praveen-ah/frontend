import { useState } from "react";
import { useParams } from "react-router-dom"

function Post() {

    const { id } = useParams();

    const [post, setPost] = useState(null)

    fetch('http://localhost:4000/posts/'+id)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPost(data)
        })
        .catch(err => {
            console.log(err)
        })

    return (
        <div>
            {post && <div className='container m-5'>
                Post: {id}
                <h3>{post.title}</h3>
                <h5>{post.content}</h5>
            </div>}
        </div>

    )
}


export default Post