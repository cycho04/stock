import React from 'react';
import { connect } from 'react-redux';

const DisplayNews = props => {

    const news = props.state.news;
    const images = props.state.images.data

    return(
        <div className='ui segments'>
            <h2>Recent News</h2>
            {news.map((article, i) => 
                <div key={article.url} className='ui segment'>
                <a href={article.url} target='_blank'>
                    <img className="ui middle aligned small image" src={images ? images[i].urls.regular : ''}/>
                    <p>{article.datetime}</p>
                    <h4>{article.headline}<span> --  --  -- {article.source}</span></h4>
                    <p>{article.summary}</p>    
                </a>
                    
                </div>
            )}
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state }
};

export default connect(mapStateToProps)(DisplayNews);