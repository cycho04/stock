import React from 'react';
import './style/Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='ui divider'></div>
            <div><i className='large github icon'/><i className='large linkedin icon'/></div>
            <div><i className='copyright outline icon'/>Powered By IEX</div>
        </div>
    )
};

export default Footer;