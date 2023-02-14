import { Card } from "react-bootstrap";
import { useState } from "react";
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => setSelected(props.book.asin)}
        style={{
          border: selected === props.book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
