import React from "react";
import Card from "./Card";

const CardSection = () => {
    return (
        // <!-- card section starts -->
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                We love new friends!
                </h2>
                <div className="row">
                    <div className="col-4">
                        <Card title="blog type 1" buttonText="blog1"/>
                    </div>
                    <div className="col-4">
                        <Card title="blog type 2" buttonText="blog2"/>
                    </div>
                    <div className="col-4">
                        <Card title="blog type 3" buttonText="blog3"/>
                    </div>
                </div>
                
            </div>
        </section>
    // <!-- card section ends -->
    );
};

export default CardSection;