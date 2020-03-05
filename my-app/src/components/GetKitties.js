import React from 'react';
import { connect } from 'react-redux';
import { getKitties } from '../actions';


const Kitties = ({ getKitties, pic, isFetching, error }) => {
    if(isFetching) {
        return <h2>Bringing the cute in 3..2..1..</h2>
    }
    if(error) {
        return<h2>{error}</h2>
    }
  return (
    <div className='kitties'>
        <img src={pic} alt='cats'/><br></br>
        <button onClick={getKitties}>Show Me More Kitties!</button>
    </div>
   );
 };

const mapStateToProps = state => {
    return {
        pic: state.pic,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getKitties })(Kitties);
