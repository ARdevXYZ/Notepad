import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (
            <Link key={key} to={`/article/${article.name}`}>
                <div className="related-card-container">
                    <div className="related-card">
                        <h2 title={article.title} alt={article.title}>{article.title}</h2>
                        <p className="entry-snippet-class">{article.content[0].substring(0,150)}...</p>
                    </div>
                </div>
            </Link>
        ))}
    </>
);

export default ArticlesList;