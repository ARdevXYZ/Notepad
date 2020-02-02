import React from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleContent from './ArticleContent';
import NotFound from './NotFound'

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = ArticleContent.find(article => article.name === name);

    if(!article) return <h1><NotFound /></h1>

    const otherArticles = ArticleContent.filter(article => article.name !== name);

    return(
        <>
            <div className="main-container">
                <h1>{article.title}</h1>
                {article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                <h3>Other Notes</h3>
                <ArticlesList articles={otherArticles} />
            </div>
        </>
    );
}

export default ArticlePage;