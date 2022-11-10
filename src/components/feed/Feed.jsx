import './feed.css'
import { useEffect, useState } from 'react';
import Shar from '../shar/Shar';
import Post from '../post/Post';
import { Posts } from '../../assets/dummyData.js'


const Feed = () => {
    const [post, setPost] = useState([])

    useEffect(() => {

        const posts = async () => {
            try {
                const res = await fetch("http://localhost:8800/api/post/636aae363179d8f8a0c9086b", {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                    }
                })

                if (!res.ok) {
                    throw new Error(`Error! status: ${res.status}`);
                }
                else {
                    const data = await res.json();
                    console.log("Voici mes donnes", data)
                    return data;
                }
            }
            catch (error) {
                console.log(error)
            }

        }


        posts()
    }, []);
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Shar />

                {
                    Posts.map((post) => (<Post key={post.id} posts={post} />))
                }
            </div>
        </div>
    );
};

export default Feed;