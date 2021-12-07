import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {
    return(
        <div>
            <h1 className="text-center mt-3">All Item</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                {data.productData.map((item)=>{
                    return(
                        <Itemcard img={item.img} title={item.title} desc={item.desc} rating={item.rating}/>
                    )
                })}
              
                
                </div>
            </section>
        </div>
    );
};

export default Home;