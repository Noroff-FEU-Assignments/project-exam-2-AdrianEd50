import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import FormError from "../../common/FormError";
import Heading from "../layout/Heading";
import useAxios from "../../customHooks/useAxios";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

function AddPost() {
  const [submitting, setSbmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();
  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSbmitting(true);
    setServerError(null);

    data.status = "publish";

    console.log(data);

    try {
      const response = await http.post("/api/v1/social/posts", data);
      console.log("response", response.data);
      navigate("/posts/posts");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSbmitting(false);
    }
  }
  return (
    <>
      <Heading content="Add Post" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <div>
            <input name="title" placeholder="Content" ref={register} />
          </div>

          <div>
            <textarea name="content" placeholder="Content" ref={register} />
          </div>

          <button>{submitting ? "submitting..." : "Submit"}</button>
        </fieldset>
      </form>
    </>
  );
}

export default AddPost;

/*{errors.title && <FormError>{errors.title.message}</FormError>}
{serverError && <FormError>{serverError}</FormError>}
 */
