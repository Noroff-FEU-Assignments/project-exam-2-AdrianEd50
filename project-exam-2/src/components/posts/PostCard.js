import { useState } from "react";
import heartEyes from "../../images/emoji.png";
import thumbsUp from "../../images/like.png";
import comment from "../../images/chat.png";

export default function PostCard(post) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const thumbsUpEmojiCount = (e) => {
    setCount2(count1 + 1);
  };
  const heartEmojiCount = (e) => {
    setCount1(count2 + 1);
  };

  return (
    <>
      <div className="post-card">
        <a href={`/posts/${post.href}`} className="post-card__content-footer">
          <div className="post-card__content-text">
            <h2>{post.title}</h2>
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
              onClick={thumbsUpEmojiCount}
              value={"👍"}
              className="reaction-button"
            >
              <img src={thumbsUp} />
            </button>
            <span className="reaction--count">{count1}</span>

            <button
              onClick={heartEmojiCount}
              value={"😍"}
              className="reaction-button"
            >
              <img src={heartEyes} />
            </button>
            <span className="reaction--count">{count2}</span>
          </div>
          <div className="reaction-count">{post.reaction_count}</div>
        </div>

        <div className="comments">
          <button className="button_comment">
            <img src={comment} /> {post.comment_count}
          </button>
        </div>
      </div>
    </>
  );
}
