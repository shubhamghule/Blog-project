import React from "react";

const AppSection = () =>{
    return (
        // <!-- App section -->
        <div className="bg-success text-center">
          <p className="display-4 text-white p-4">Discover the amazing new app</p>
          <p className="text-white">
            How's Your Mood today ?
          </p>
          <div className="row  p-4">
            <div className="col-6 text-right">
              <button className="btn btn-warning btn-lg">Play Store</button>
            </div>
            <button className="btn btn-warning btn-lg">App Store</button>
            <div className="col-6 text-center"></div>
          </div>
        </div>
        // <!-- App section ends -->
    );
};

export default AppSection;
