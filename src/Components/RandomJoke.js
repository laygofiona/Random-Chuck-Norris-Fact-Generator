import React from 'react';
import App from '../Containers/App';

const RandomJoke = ({ chuckJoke }) => {
    return (
        <div className='ba b--light-yellow br2 shadow-1 tc db pa3 ma3 bw2 w-60 center bg-white'>
            <h3>{chuckJoke}</h3>
        </div>
    )
}

export default RandomJoke;