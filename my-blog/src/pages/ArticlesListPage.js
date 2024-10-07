import ArticleList from '../components/ArticlesList.js';
import articles from './article-content.js';

const ArticlesListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticleList articles={articles}/>
        </>
    );
}

export default ArticlesListPage;