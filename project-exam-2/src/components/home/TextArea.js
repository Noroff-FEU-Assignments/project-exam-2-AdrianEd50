import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Textarea() {
  return (
    <>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Write your post"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Write your post" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Leave a comment here">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </>
  );
}

export default Textarea;
