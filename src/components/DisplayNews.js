import React from 'react';
import { connect } from 'react-redux';

import './style/DisplayNews.css';

const DisplayNews = props => {

    const news = props.state.news;
    const images = props.state.images.data
    
    return(
        <div className='ui raised displaynews segment'>
            <div className={`ui ${props.state.quote.quote.change >= 0 ? 'green' : 'red'} ribbon label`}>Recent News</div>
            <div className='ui displaynews segment'>
                <div className='ui divided link items'>
                    {news.map((article, i) => 
                        <a key={article.url} className='item' href={article.url} target='_blank'>
                            <div className='image'>
                                <img className="ui middle aligned small image" src={images ? images[i].urls.regular : ''}/>
                            </div>
                            <div className='content'>
                                <div  className='header displaynews'>{article.headline}</div>
                                <div className='meta'>{article.source}<p>{article.datetime}</p></div>
                                <div className='description displaynews'>
                                    <p>{article.summary}</p> 
                                </div> 
                            </div>      
                        </a> 
                    )}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state }
};

export default connect(mapStateToProps)(DisplayNews);