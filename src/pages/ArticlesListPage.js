import React from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleContent from './ArticleContent.js';

const ArticlesListPage = () => (
    <>
    <div className="main-container">
       <h2 className="center">Notepad Entries</h2>
        <ArticlesList articles={ArticleContent} />
    </div>
    </>
);

export default ArticlesListPage;