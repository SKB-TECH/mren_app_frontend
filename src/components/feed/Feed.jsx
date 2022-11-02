import './feed.css'
import Shar from '../shar/Shar';
import Post from '../post/Post';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Shar />
                <Post />
            </div>
        </div>
    );
};

export default Feed;