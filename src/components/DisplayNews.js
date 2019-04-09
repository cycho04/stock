import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const Banner = styled.div`
    padding-top: 6.0em;
    padding-bottom: 2.0em;
`

const Wrapper = styled.div`
    color: black !important;
`

const DisplayNews = ({ images, news }) => {

    const displayArticles = news.map((article, i) => 
        <a key={article.url} className='item' href={article.url} target='_blank'>
            <div className='image'>
                <img className="ui middle aligned small image" src={images ? images[i].urls.regular : ''}/>
            </div>
            <div className='content'>
                <div  className='header'>{article.headline}</div>
                <div className='meta'>{article.source}<p>{article.datetime}</p></div>
                <div className='description'>
                    <p>{article.summary}</p> 
                </div> 
            </div>      
        </a> 
    )    
    
    return(
        <div>
            <Banner className='ui horizontal divider'>
                <h2>RECENT NEWS</h2>
            </Banner>
            <Wrapper>
                <div className='ui divided link items'>
                    { displayArticles }
                </div>
            </Wrapper> 
        </div>
    )
};

const mapStateToProps = state => {
    return { 
        images: state.images.data,
        news: state.news 
    }
};

export default connect(mapStateToProps)(DisplayNews);