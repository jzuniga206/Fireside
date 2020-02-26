import React, { Component } from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table
} from 'reactstrap';

/*
As mentioned in Results.jsx, the major work in Camp.jsx that needs to be done includes creating a function
in App.jsx that can add each of our favorites to an array in state. 
*/

const Camp = props => {
    const { camp } = props;
    const { facilityName , latitude, longitude, sitesWithPetsAllowed, sitesWithSewerHookup, sitesWithWaterHookup, sitesWithWaterFront, state} = camp;

    const postToFavs = (data) => {
    console.log(data, "This is data coming from the form");
      fetch('/user/favorite', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((newData) => {
        console.log('Success:', newData);
        // window.location.href = `http://localhost:8080/habit/${id}/input/cal`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    let fav = <button type="radio" name={`fav${facilityName}`} onClick={`${postToFavs}`} />



    // if(star.isFav){
    //     star = solidStar
    // } else {
    //     star = regStar
    // }

    // let FavIcon;
    // if (isFav) FavIcon = (<span className="favIcon"><FAIcon onClick={() => favClicked(id)} icon={solidStar} style={{ color: 'steelblue' }} /></span>);
    // else FavIcon = (<span className="favIcon"><FAIcon onClick={() => favClicked(id)} icon={regStar} /></span>);

    return (
        // <ReactFragment className="CampFrag">
            <tr className="CampRow">
                <td><strong>{facilityName}</strong></td>
                <td><strong>{sitesWithPetsAllowed}</strong></td>
                <td><strong>{sitesWithSewerHookup}</strong></td>
                <td><strong>{sitesWithWaterHookup}</strong></td>
                <td><strong>{sitesWithWaterFront}</strong></td>
                <td><strong>{longitude}</strong></td>
                <td><strong>{latitude}</strong></td>
                <td className="fav"><strong>{fav}</strong></td>
            </tr>
        // </ReactFragment>
    )
};

export default Camp;
