import React from "react";
const Posts = () => {
  return (
    <div className="mt-7">
      <div className="carousel carousel-center gap-4">
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
