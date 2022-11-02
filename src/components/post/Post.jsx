import "./post.css"
import { MdMoreVert } from "react-icons/md"

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/src/assets/person/2.jpg" alt="" />
                        <span className="postUsername">Shako Kinyamba Bnejamin</span>
                        <span className="postDate">5 days ago</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert />
                    </div>
                </div>
                <div className="postCenter">

                </div>
                <div className="postBottom">

                </div>
            </div>
        </div>
    );
};

export default Post;