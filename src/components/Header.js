import React from 'react';
import { connect } from 'react-redux';

const Header = () => {
    return <div>Header</div>;
};

const mapStateToProps = (state) => {
    console.log(state);
    return {};
}

export default connect(mapStateToProps)(Header);