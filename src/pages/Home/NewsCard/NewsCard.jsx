import moment from "moment/moment";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = (news) => {
  const { _id, title, details, image_url, total_view } = news;
  const { name, published_date, img } = news.author;
  const { number } = news.rating;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image width="40" height="40" src={img} alt="" roundedCircle />
        <div className="ps-2 flex-grow-1">
          <h4>{name}</h4>
          <p>
            <small>{moment(published_date).format("YYYY-MM-DD")}</small>
          </p>
        </div>
        <div className="">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length <= 250 ? details : details.slice(0, 250)}...
          <Link to={`/news/${_id}`}>Read More</Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span className="ms-2">{number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
