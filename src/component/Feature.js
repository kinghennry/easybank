import './Feature.css'
import { articles} from '../data'

const Feature = () => {
    return (
        <section className="feature">
            <div className="container p-all">
                <div className="feature__intro">
            <h2 className="feature__header"> Why choose EasyBank</h2> 
           <p className="feature__paragraph">We leverage Open Banking to turn your bank account into your financial hub.Control your finances like never before.</p>
                </div>
           
                <div className="feature__grid">
                    {articles.map(article => {
                        const {id,icon,title,description}=article
                        return (
                            
       <div key={id} className="feature__item">
        <div className="feature__icon">
        <img src={icon} alt=""/>   
            </div>
    <div className="feature__title">
    {title}
        </div>
    <div className="feature__description">
        {description}
    </div>
                        </div> 
                      )
                    })}
                   
           </div>
           </div>
        </section>
    )
}

export default Feature
