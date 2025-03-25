import axios from "axios";

export const fetchUsers = async (username, location, minRepos, page = 1) => {
  try {
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?${query}&page=${page}&per_page=10`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
