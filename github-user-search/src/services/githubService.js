import axios from "axios";



export const fetchUserData = async (username, location, minRepos,) => {
  try {
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q${query}`);
    
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
