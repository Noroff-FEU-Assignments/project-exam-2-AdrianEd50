import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button } from "react-bootstrap";
import FormError from "../../common/FormError";
import Heading from "../layout/Heading";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { token } from "../../utils/storage";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addPostUrl = BASE_URL + "social/posts";

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    console.log(data);

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(addPostUrl, data, options);
      console.log(response.data);
      navigate("/posts");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <div className="white-background-container">
        <Link to="/posts" className="goBack-link">
          Go back
        </Link>
        <Heading content="Add Post" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {serverError && <FormError>{serverError}</FormError>}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              className="add-post-input"
              {...register("title")}
              type="text"
              placeholder="Write your title"
            />
            <Form.Text className="text-muted"></Form.Text>
            {errors.title && <FormError>{errors.title.message}</FormError>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Body</Form.Label>
            <Form.Control
              className="add-post-input"
              {...register("body")}
              placeholder="Write your text here"
            />
            <Form.Text className="text-muted"></Form.Text>
            {errors.body && <FormError>{errors.body.message}</FormError>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              className="add-post-input"
              {...register("image")}
              placeholder="Enter your image url here"
            />
            <Form.Text className="text-muted">
              Must be a fully formed URL
            </Form.Text>
            {errors.image && <FormError>{errors.image.message}</FormError>}
          </Form.Group>
          <Button type="submit" className="addPost-btn">
            {submitting ? "Adding..." : "Add"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddPost;

/*{errors.title && <FormError>{errors.title.message}</FormError>}
{serverError && <FormError>{serverError}</FormError>}

<button >
            {submitting ? "adding..." : "Add"}
          </button>
          
          
          
          
          
          
          <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="title" placeholder="Title" {...register} />
            {errors.title && <FormError>{errors.title.message}</FormError>}
          </div>

          <div>
            <textarea name="body" placeholder="Body" {...register} />
          </div>

          <div>
            <input name="Image" placeholder="Image" {...register} />
          </div>

          <button type="submit" className="addPost-btn">
            {submitting ? "adding..." : "Add"}
          </button>
        </fieldset>
      </form>
 */
