import React from 'react'
import { useQuery } from 'react-query'


const fetchPosts = async () => {
    const response = await get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

const PostsComponent = () => {
    const { data, error, isLoading, refetch} = useQuery("posts", fetchPosts, {staleTime: 5000, // Cache data for 5 seconds
        refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
      });

      if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;