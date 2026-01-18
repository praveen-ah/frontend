import axios from "axios";
import React, { useEffect, useState } from "react";

function Suggestions() {

    const [profile, setProfile] = useState(null)
    const [suggesitons, setSuggestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/profile')
            .then((data) => data.json())
            .then((data => setProfile(data)))
            .catch(err => console.log(err))

        fetch('http://localhost:3000/suggestions')
            .then((data) => data.json())
            .then((data => setSuggestions(data)))
            .catch(err => console.log(err))

    }, [])

    const handleFollow = async (id, username) => {
        axios.post("http://localhost:3000/followers", {"id":id, "username":username})
        .then(alert("folowed"))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="suggestions w-75 m-5">
                {profile ?
                    <div className="d-flex">
                        <img className="dp rounded-circle" src={profile.profile_pic} alt="profile pic" />
                        <h5>{profile.username}</h5>
                        <small className="ms-auto text-primary">Switch</small>
                    </div>
                    : <p>Loading</p>
                }
                <div className="d-flex">
                    <p>Suggested for you</p>
                    <b className="ms-auto">See All</b>
                </div>

                {suggesitons.length > 0 ? (
                    <div>
                        {suggesitons.map((suggesiton) => (
                            <div className="my-2" key={suggesiton.id}>
                                <div className="d-flex">
                                    <img className="dp rounded-circle" src={suggesiton.profile_pic} alt="profile pic" />
                                    <h5>{suggesiton.username}</h5>
                                    <a className="text-primary ms-auto" onClick={()=>{handleFollow(suggesiton.id, suggesiton.username)}}>Follow</a>
                                </div>
                            </div>

                        ))}
                    </div>

                ) : (
                    <div>
                        Loading
                    </div>
                )

                }
            </div>

        </div>
    )
}

export default Suggestions