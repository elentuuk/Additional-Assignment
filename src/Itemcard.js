import React from "react";

// import Rating from "./Rating";

const Itemcard = (props) => {
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-text">{props.desc}</h5>
                    <h5 className="card-rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </h5>
                    {/* <Rating value={props.rating} /> */}
                    {/* <Rating value={props.rating} text={`${props.numReviews} reviews`}/> */}


                        {/* <p>⭐⭐⭐⭐</p> */}

                     <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Rp. 12.000</button>
                        <button type="button" className="btn btn-primary">🛒</button>
                    </div>  
                    
                    {/* <div className="rating-produc">
                        <Rating value={props.rating} text={`${props.numReviews} reviews`}/>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Itemcard;