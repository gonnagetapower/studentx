import React from 'react';

const Post = React.forwardRef(({ post }, ref) => {
  const postBody = (
    <>
      {console.log(post)}
      {/* <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p> */}
      <div className="content-item">
        <h1 className="content-item__title">{post.title}</h1>
        <p className="content-item__descr">{post.description}</p>
        <div className="content-info">
          <p className="content-info__date">{post.orderDate}</p>
          <p className="content-info__price">от {post.price} </p>
          <button
            onClick={() => router.pushPage(PAGE_RESPOND, { id: post.id })}
            className="content-info__button">
            откликнуться
          </button>
        </div>
      </div>
    </>
  );

  const content = ref ? <article ref={ref}>{postBody}</article> : <article>{postBody}</article>;

  return content;
});

export default Post;
