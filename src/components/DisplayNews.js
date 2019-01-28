import React from 'react';
import { connect } from 'react-redux';

const DisplayNews = props => {

    const news = props.state.news;

    return(
        <div className='ui segment'>
            {news.map((article) => 
                <div key={article.url}><img src={article.image}/></div>
            )}
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state }
};

export default connect(mapStateToProps)(DisplayNews);