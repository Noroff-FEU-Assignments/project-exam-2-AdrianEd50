import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import { token } from "../../utils/storage";
import { useParams } from "react-router-dom";

export default function DeletePost() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  let { id } = useParams();

  const url = BASE_URL + `social/posts/${id}`;

  async function doDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (confirmDelete) {
      try {
        const response = await axios.delete(url, options);
        navigate("/posts");
      } catch (error) {
        setError(error);
      }
    }
  }

  return (
    <button type="button" className="delete-btn" onClick={doDelete}>
      {error ? "An error occured" : "Delete"}
    </button>
  );
}
