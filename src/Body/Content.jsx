import { subHeading, subHeadingDescription } from '../constants';
import './styles/content.scss';

const Content = () => {
  return (
    <div className="content-container">
      <div className="img-container">
        <img src="https://slack.zendesk.com/hc/article_attachments/32815105939987" />
      </div>

      <div>
        <h2>{subHeading}</h2>
        <p> {subHeadingDescription}</p>
        <button className="secondary-button">Watch Video</button>
      </div>
    </div>
  );
};

export default Content;
