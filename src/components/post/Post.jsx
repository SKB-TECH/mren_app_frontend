import "./post.css"
import { MdMoreVert } from "react-icons/md"
import { BsFillSuitHeartFill, BsGiftFill } from "react-icons/bs"
import { AiOutlineLike } from "react-icons/ai"

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/src/assets/person/1.jpg" alt="" />
                        <span className="postUsername">Shako Kinyamba Bnejamin</span>
                        <span className="postDate">5 days ago</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey Friend it's my first post in sumulia</span>
                    <img className="postImg" src="/src/assets/person/1.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon1" src="/src/assets/person/like.jpg" alt="" />
                        <img className="likeIcon2" src="/src/assets/person/heart.png" alt="" />
                        <span className="postlikeCounter">32 personns liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> 70 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;