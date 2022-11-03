import './feed.css'
import Shar from '../shar/Shar';
import Post from '../post/Post';
import { Posts } from '../../assets/dummyData.js'


const Feed = () => {
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