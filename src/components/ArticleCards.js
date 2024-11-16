import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const ArticleCards = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('544523f0860d41128a5006889a3fbf06');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="card-container">
      {loading && <div>Loading...</div>}
      {error && <div>Failed to fetch data: {error}</div>}
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4">
            <Card className="card">
              <CardBody>
                <CardTitle>{article.title}</CardTitle>
                <CardText>{article.description}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCards;
