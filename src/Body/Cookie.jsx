import { cookieText } from '../constants';
import './styles/cookie.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Cookie = () => {
  const [showCookie, setShowCookie] = useState(true);
  return (
    <>
      {showCookie ? (
        <div className="cookie-container">
          <button className="close-btn" onClick={() => setShowCookie(false)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
          <p>
            {cookieText} <a>More Info</a>
          </p>

          <button className="primary-button">Accept All Cookies</button>
          <button className="secondary-button">Reject All Cookies</button>
        </div>
      ) : null}

      <div className="user">
        <div className="user-msg">
          {' '}
          Hey there 👋🏼 Want to know something cool?
        </div>
        <button className="user-btn">👋🏼</button>
      </div>
    </>
  );
};

export default Cookie;
