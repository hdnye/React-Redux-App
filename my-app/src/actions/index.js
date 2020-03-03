import axios from 'axios'; 
export const FETCHING_PICS = 'FETCHING_PICS';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export const getKitties = () => dispatch => {
  // fetch placeholder  
    dispatch({ 
        type: FETCHING_PICS
    })

    // fetch data
    axios
        .get('http://placekitten.com/400/287')
        .then( res=> {
            console.log('res', res);
            dispatch({ 
                type: SUCCESS,
                payload: res.data
            })
        }) 
           .catch(err => {
            console.log('err', err);
            dispatch({
                type: FAIL,
                payload: 'Failed to load'
            });
        }); 
    };
        

