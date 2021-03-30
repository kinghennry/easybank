import './BlogPost.css'
import {gridItems} from "../data"
const BlogPost = () => {
    return (
        <section className="articles">
            <div className="content container p-all">
                <h2>Latest Articles</h2>
                <div className="article__grid">
            {gridItems.map(gridItem => {
        const{id,image,author,title,description}=gridItem
        return (
    <a key={id} className="article__item">
    <div className="article__image" >
    <img src={image} alt=""/>
    </div>
    <div className="article__text">
    <div className="article__author">{author}</div>
    <div className="article__title">{title}</div>
    <div className="article__description"> {description}</div>
    </div>
     </a>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default BlogPost
