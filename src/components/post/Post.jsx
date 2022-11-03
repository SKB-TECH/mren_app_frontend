import "./post.css"
import { useState } from "react"
import { MdMoreVert } from "react-icons/md"
import { BsFillSuitHeartFill, BsGiftFill } from "react-icons/bs"
import { AiOutlineLike } from "react-icons/ai"
import { Users } from "../../assets/dummyData"

const Post = ({ posts }) => {
    const [like, setLike] = useState(posts.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">

            <div className="postWrapper">
                <div className="postTop">
                    {/* pour le profile utilisateur */}
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((user) => user.id == posts.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((user) => user.id == posts.userId)[0].username}</span>
                        <span className="postDate">{posts.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{posts?.desc}</span>
                    <img className="postImg" src={posts.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/src/assets/like.png" alt="" onClick={likeHandler} />
                        <img className="likeIcon" src="/src/assets/heart.png" alt="" onClick={likeHandler} />
                        <span className="postlikeCounter">{like}personns liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> {posts.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;