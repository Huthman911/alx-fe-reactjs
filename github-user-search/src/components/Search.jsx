import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
        const data = await fetchUserData(searchTerm);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub Username..."
          className="border p-2 w-full rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Looks like we can't find the user</p>}
      
      {userData && (
        <div className="border p-4 rounded shadow">
          <img src={userData.avatar_url} alt="User Avatar" className="w-20 h-20 rounded-full mx-auto" />
          <h2 className="text-center text-lg font-semibold">{userData.name || userData.login}</h2>
          <p className="text-center text-gray-600">
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
