import { useEffect, useState } from "react";
import heartEyes from "../../images/emoji.png";
import thumbsUp from "../../images/like.png";
import comment from "../../images/chat.png";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import { token } from "../../utils/storage";

export default function PostCard(post) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const heartEyes_url = BASE_URL + `social/posts/` + post.href + `/react/😍`;
  const thumbsUp_url = BASE_URL + `social/posts/` + post.href + `/react/👍`;

  const heartReactEmoji = async () => {
    axios({
      method: "put",
      url: heartEyes_url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(function () {
      console.log("reaction ok 😍");
    });
  };

  const thumbsUpReactEmoji = async () => {
    axios({
      method: "put",
      url: thumbsUp_url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(function () {
      console.log("reaction ok 👍");
    });
  };

  useEffect(() => {
    const heartEmojiCount = () => {
      let heartEyesEmoji = 0;
      post.reactions.map(function (emoji) {
        if (emoji.symbol === "😍") {
          heartEyesEmoji = emoji.count;
        }
        return heartEyesEmoji;
      });
      return heartEyesEmoji;
    };

    const thumbsUpEmojiCount = () => {
      let thumbsUpEmoji = 0;
      post.reactions.map(function (emoji) {
        if (emoji.symbol === "👍") {
          thumbsUpEmoji = emoji.count;
        }
        return thumbsUpEmoji;
      });
      return thumbsUpEmoji;
    };
    setCount1(heartEmojiCount());
    setCount2(thumbsUpEmojiCount());
  }, [post.reactions]);

  const hanleHeartsEyesEmojiCount = () => {
    setCount1(count1 + 1);
    heartReactEmoji();
  };

  const handleThumbsUpEmojiCount = () => {
    setCount2(count2 + 1);
    thumbsUpReactEmoji();
  };

  /*const thumbsUpEmojiCount = (e) => {
    setCount2(count1 + 1);
  };
  const heartEmojiCount = (e) => {
    setCount1(count2 + 1);
  };*/

  return (
    <>
      <div className="post-card">
        <a href={`/posts/${post.href}`} className="post-card__content-footer">
          <div className="post-card__content-text">
            <h2>{post.title}</h2>
          </div>
          <div className="comments">
            <button className="button_comment">
              <img src={comment} /> {post.comment_count}
            </button>
          </div>
        </a>
        <div className="post-card__content-text">
          <p>{post.body}</p>
        </div>

        <div className="post-card_content">
          {post.src ? (
            <div className="post-card__image">
              <img src={post.src} alt={post.alt} />
            </div>
          ) : (
            <div className="post-card__content-text"></div>
          )}
        </div>

        <div className="post-id">Created: {post.created}</div>
        <div className="post-id">Author: {post.author}</div>

        <div className="reactions">
          <div className="reaction-buttons">
            <button
              onClick={handleThumbsUpEmojiCount}
              value={"👍"}
              className="reaction-button"
            >
              <img src={thumbsUp} />
            </button>
            <span className="reaction--count">{count1}</span>

            <button
              onClick={hanleHeartsEyesEmojiCount}
              value={"😍"}
              className="reaction-button"
            >
              <img src={heartEyes} />
            </button>
            <span className="reaction--count">{count2}</span>
          </div>
          <div className="reaction-count">{post.reaction_count}</div>
        </div>
      </div>
    </>
  );
}
/*<div className="comments">
          <button className="button_comment">
            <img src={comment} /> {post.comment_count}
          </button>
        </div> */
