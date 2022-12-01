import React from "react";
import Heading from "../layout/Heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import FormError from "../../common/FormError";
import { token } from "../../utils/storage";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

function EditPost() {
  const [post, setPost] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [gettingPost, setGettingPost] = useState(true);
  const [updatingPost, setUpdatingPost] = useState(false);
  const [getError, setGetError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let { id } = useParams();

  const updateUrl = BASE_URL + `social/posts/${id}`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(function () {
    async function getPost() {
      try {
        const response = await axios.get(updateUrl, options);
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.log(error);
        setGetError(error.toString());
      } finally {
        setGettingPost(false);
      }
    }
    getPost();
  }, []);

  async function onSubmit(data) {
    setUpdatingPost(true);
    setUpdateError(null);
    setUpdated(false);

    console.log(data);

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put(updateUrl, data, options);
      console.log(response);
      setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
      setUpdatingPost(false);
    }
  }

  if (gettingPost) return <div>Loading...</div>;

  if (getError) return <div>An eror occured when loading your post</div>;

  return (
    <>
      <Heading content="Edit post" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        {updated && (
          <div className="success">The post was successfully updated</div>
        )}
        {updateError && <FormError>{updateError}</FormError>}
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title")}
            defaultValue={post.title}
            type="text"
            placeholder="Title"
          />
          <Form.Text className="text-muted"></Form.Text>
          {updateError && <FormError>{updateError}</FormError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>body</Form.Label>
          <Form.Control
            {...register("body")}
            defaultValue={post.body}
            type="text"
            placeholder="Body"
          />
          <Form.Text className="text-muted"></Form.Text>
          {updateError && <FormError>{updateError}</FormError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            {...register("image")}
            type="text"
            placeholder="Enter your image URL"
          />
          <Form.Text className="text-muted">
            must be a fully formed URL that links to a live and publicly
            accessible image
          </Form.Text>
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </Form.Group>
        <Button type="submit">{submitting ? "Updating..." : "Update"}</Button>
      </Form>
    </>
  );
}

export default EditPost;
