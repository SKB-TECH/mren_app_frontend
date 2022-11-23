import "./shar.css"
import { MdOutlinePermMedia, MdRoom, MdLabel } from 'react-icons/md'
import { BsEmojiSmile } from "react-icons/bs"

const Shar = () => {
    return (
        <div className="shar ">
            <div className="sharWrapper">
                <div className="sharTop">
                    <img src="/src/assets/person/benjamin.jpg" alt="" className="sharProfileImg" />
                    <input type="text" name="" id="" className="sharInput"
                        placeholder="What is your mind shako ?"
                    />
                </div>
                <hr className="sharHr" />
                <div className="flex   sharBottom">
                    <div className="sharOptions">
                        <div className="sharOption">
                            <MdOutlinePermMedia style={{ color: 'tomato' }} className=" sharIcon" />
                            <span className="hidden sharOptionText">Photos or videos</span>
                        </div>
                    </div>
                    <div className="sharOptions">
                        <div className="sharOption">
                            <MdLabel style={{ color: 'blue' }} className="sharIcon" />
                            <span className="hidden sharOptionText">Label</span>
                        </div>
                    </div>

                    {/* un */}
                    <div className="sharOptions">
                        <div className="sharOption">
                            <MdRoom style={{ color: 'green' }} className="sharIcon" />
                            <span className="hidden sharOptionText"></span>Location
                        </div>
                    </div>
                    {/* deux */}
                    {/* trois */}
                    <div className="sharOptions">
                        <div className="sharOption">
                            <BsEmojiSmile style={{ color: 'goldenrod' }} className="sharIcon" />
                            <span className="hidden sharOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className=" sharButton">Shar</button>
                </div>

            </div>
        </div>
    );
};

export default Shar;