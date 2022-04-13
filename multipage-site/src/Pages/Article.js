import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const Article = () => {
    const { id } = useParams();
    const { data: article, isPending, error } = useFetch(`http://localhost:3000/articles/${id}`);
    const navigate  = useNavigate();

    useEffect(() => {
        if (error) {
            //history.goBack()
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    },[error, navigate])

    return ( <div>
        <h1>
        {isPending && <div>...loading</div>}
        {error && <div> {error} </div>}
        </h1>
        {article && (<div>
            <h1>{article.title}</h1>
            <h3>{article.author}</h3>
            <p>{article.body}</p>
        </div>)}
    </div> );
}
 
export default Article;