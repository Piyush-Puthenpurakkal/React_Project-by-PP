import React, { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NewsCard from "./components/NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const fetchArticles = async (category, page = 1, query = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/${query ? "everything" : "top-headlines"}?` +
          `category=${query ? "" : category}&` +
          `q=${query}&page=${page}&pageSize=10&country=us&apiKey=${API_KEY}`
      );
      setArticles(page === 1 ? response.data.articles : [...articles, ...response.data.articles]);
      setPage(page + 1);
    } catch (error) {
      setError("Failed to fetch articles. Please try again.");
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "News Boom"; // Change the tab title
    fetchArticles(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
    fetchArticles(category, 1, query);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = !isDarkMode ? "#121212" : "#f9f9f9";
    document.body.style.color = !isDarkMode ? "#ffffff" : "#2c3e50";
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar
        onSearch={handleSearch}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        setCategory={setCategory}
      />
      <div className="content-container">
        <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="news-container">
          {error && <div className="error-message">{error}</div>}
          <InfiniteScroll
            dataLength={articles.length}
            next={() => fetchArticles(category, page, searchQuery)}
            hasMore={true}
            loader={
              <div className="loader">
                <ClipLoader size={50} color={isDarkMode ? "#ecf0f1" : "#2c3e50"} />
              </div>
            }
          >
            <div className="news-list">
              {articles.map((article, index) => (
                <NewsCard key={index} article={article} isDarkMode={isDarkMode} />
              ))}
            </div>
          </InfiniteScroll>
          {!loading && articles.length === 0 && <p>No articles found.</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
