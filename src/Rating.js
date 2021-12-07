import React from 'react';
import {v4 as uuidv4} from 'uuid'

const Rating = ({value, text, color}) => {
    return (
        <div className="rating">
             {[1,2,3,4,5].map((item)=>(
                 
                 <span key={uuidv4()}>
                    <i style={{color}} className={
                        
                        value + 1 === item + 0.5 
                        ? 'fas fa-star-half-alt'
                        : value >= item
                        ? 'fas fa-star' : 'far fa-star'

                    }></i>
                 </span>

             ))}
        </div>
    )
};

Rating.defaultProps = {
    color: '#FFA41C',
}

export default Rating;
