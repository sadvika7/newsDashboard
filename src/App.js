import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "./NewsList";
import "./style.css";

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9e5a4b560b6a48829109a620afc57581"
        );
        setNews(response.data.articles);
      } catch (error) {
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=9e5a4b560b6a48829109a620afc57581`
      );
      setNews(response.data.articles);
    } catch (error) {
      setError("Error searching news");
    }
  };

  return (
    <div className="app">
      <div
        style={{
          backgroundColor: "grey",
        }}
      >
        <h1>News Dashboard</h1>

        <div>
          <input
            type="text"
            placeholder="Search here for news"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "200px",
              height: "40px",
            }}
          />
          <button
            onClick={handleSearch}
            style={{ width: "100px", height: "46px", marginBottom: "5px" }}
          >
            Search
          </button>
        </div>
      </div>
      <br />
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <NewsList news={news} />}
    </div>
  );
};

export default App;
