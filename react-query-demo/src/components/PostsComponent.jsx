import React from 'react'
import { useQuery } from 'react-query'


const fetchPosts = async () => {
    const response = await get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

const PostsComponent = () => {
    const { data, isError, error, isLoading, refetch} = useQuery("posts", fetchPosts, {staleTime: 5000, // Cache data for 5 seconds
        cacheTime: 10000, // Keep cached data for 10 seconds before garbage collection
        keepPreviousData: true, // Keep previous data while fetching new data
        refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
      });

      if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts: {error.message}</p>;

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