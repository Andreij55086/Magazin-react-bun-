import React from 'react';
import {Link} from 'react-router-dom';

const HomeCategory = (props) => {
    const {route, name, description, image} = props;

    return(
        <div className="col-6 mb-3">
            <Link to={`/category/${route}`}>
                <div className="w-100">
                    <img src={image} alt={name} className="w-100"/>
                </div>
                <h2 className="h4 my-1"><strong>{name}:</strong></h2>
                <p className="m-0">{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;