import "./shar.css"
import { MdOutlinePermMedia } from 'react-icons/md'
const Shar = () => {
    return (
        <div className="shar">
            <div className="sharWrapper">
                <div className="sharTop">
                    <img src="/src/assets/person/benjamin.jpg" alt="" className="sharProfileImg" />
                    <input type="text" name="" id="" className="sharInput"
                        placeholder="What is your mind shako ?"
                    />
                </div>
                <hr className="sharHr" />
                <div className="sharBottom">
                    <div className="sharOptions">
                        <div className="sharOption">
                            <MdOutlinePermMedia className="sharIcon" />
                            <span className="sharOptionText">Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shar;