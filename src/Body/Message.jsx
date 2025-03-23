import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {homeMessage, homeMessageBold, homeMessageLink, homeMessagePlain} from "../constants";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles/message.scss";

const Message = () => {
    return(
        <div className="message-container">
            <span>
                <b>{homeMessageBold}</b>
                {homeMessagePlain}
                <a className="message-link" href="#">{homeMessageLink}</a>
            </span>
            <button className="close-btn">

                <FontAwesomeIcon icon = {faClose}/>
            </button>
        </div>
    )
}

export default Message;