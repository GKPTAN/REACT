import { use, Suspense } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostItems = () => {

  const posts = use(fetchPosts());

  return (
    <div>
      <main>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

const Posts = () => {
  return (
    <Suspense fallback="Carregando posts...">
      <PostItems />
    </Suspense>
  );
};

export default Posts