import React from 'react';
import './css/SchoolCard.css';

function SchoolCard(props) {
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.name}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">{props.year}</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
            <li className="list-group-item">Enrollment Data</li>
            <li className="list-group-item">Hispanics: {props.hisp}</li>
            <li className="list-group-item">Black: {props.blk}</li>
            <li className="list-group-item">Asian: {props.asian}</li>
            <li className="list-group-item">White: {props.white}</li>
            <li className="list-group-item">Male: {props.Male}</li>
            <li className="list-group-item">Female: {props.female}</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">SWD: {props.swd}</li>
            <li className="list-group-item">ECIDS:{props.ecdis}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
