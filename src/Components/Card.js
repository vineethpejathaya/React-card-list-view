import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.Image} alt="random image" />
      </div>
      <div className="card-body">
        <p>
          Item : <span className="tag tag-red">{props.Name}</span>
        </p>
        <p>
          Brand : <span>{props.Company}</span>
        </p>
        <p>
          Price : $ <span>{props.Price}</span>
        </p>
      </div>
    </div>
  );
}
