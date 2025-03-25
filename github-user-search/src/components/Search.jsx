import { useState } from "react";
import { fetchUsers } from "../services/githubService";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUsers(searchTerm, location, minRepos, page);
      setUsers(data.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4 flex flex-col gap-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub Username..."
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repos (optional)"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Looks like we cant find the user</p>}

      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow mb-2 flex items-center gap-4">
              <img src={user.avatar_url} alt="User Avatar" className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Visit GitHub Profile
                  </a>
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-green-500 text-white p-2 rounded mt-4 w-full"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
