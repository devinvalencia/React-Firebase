import { useFetch } from "../Hooks/useFetch";

const Home = () => {
    const { data: articles, isPending, error } = useFetch('http://http://localhost:3000/articles');

    return ( 
    <div className="home">
        <h2>Articles</h2>
        {isPending && <div>...loading</div>}
        {error && <div> {error} </div>}
        {articles && articles.map((article) => {
            <div key={article.id} className="card">
                <h3>{article.author}</h3>
                <p>{article.author}</p>
            </div>
        })}
        
    </div> );
}
 
export default Home;