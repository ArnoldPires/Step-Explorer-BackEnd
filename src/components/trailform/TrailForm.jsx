import React, { useState } from 'react';

const TrailForm = () => {
  const [name, setName] = useState('');
  const [miles, setMiles] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [attractions, setAttractions] = useState('');
  const [suitability, setSuitability] = useState('');
  const [routeType, setRouteType] = useState('');
  const [location, setLocation] = useState('');
  const [picture, setPicture] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'miles':
        setMiles(value);
        break;
      case 'difficulty':
        setDifficulty(value);
        break;
      case 'attractions':
        setAttractions(value);
        break;
      case 'suitability':
        setSuitability(value);
        break;
      case 'routeType':
        setRouteType(value);
        break;
      case 'location':
        setLocation(value);
        break;
      default:
        break;
    }
  }
   const handleFileChange = (event) => {
   setPicture(event.target.files[0]);
  };
    return (
      <section className="formWrapper">
        <div className="submitForm">
          <label>
            <span>Trail Name: </span>
            <input type="text" placeholder="Enter a name" name="name" value={name} onChange={handleInputChange}/>
          </label>
          <label>
            <span>Miles: </span>
            <input type="number" step="any" placeholder="Enter mile of Trail" name="miles" value={miles} onChange={handleInputChange}/>
          </label>
          <label>
            <span>Difficultly: </span>
            <select name="difficulty" value={difficulty} onChange={handleInputChange}>
              <option value="" disabled hidden>
                Select Difficultly:
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
          <label>
            <span>Attractions: </span>
            <select name="attractions" value={attractions} onChange={handleInputChange} >
              <option value="" disabled hidden>
                Select Attraction:
              </option>
              <option value="Waterfall">Waterfall</option>
								<option value="Views">Views</option>
								<option value="Flowers">Flowers</option>
								<option value="Lake">Lake</option>
								<option value="River">River</option>
								<option value="Forest">Forest</option>
								<option value="Wildlife">Wildlife</option>
								<option value="Beach">Beach</option>
								<option value="Cave">Cave</option>
								<option value="Hot Springs">Hot Springs</option>
								<option value="Historic Site">Historic Site</option>
								<option value="Rail Trails">Rail Trails</option>
								<option value="City Walk">City Walk</option>
								<option value="Pub Walk">Pub Walk</option>
								<option value="Event">Event</option>
            </select>
          </label>
        </div>
        <div className="submitForm">
          <label>
            <span>Suitability: </span>
            <select name="suitability" value={suitability} onChange={handleInputChange} >
              <option value="" disabled hidden>
                Suitability:
              </option>
								<option value="Dog Friendly">Dog Friendly</option>
								<option value="Kid Friendly">Kid Friendly</option>
								<option value="Stroller Friendly">Stroller Friendly</option>
								<option value="Wheelchair Friendly">Wheelchair Friendly</option>
								<option value="Paved">Paved</option>
								<option value="Partially Paved">Partially Paved</option>
            </select>
          </label>
          <label>
            <span>Route Type: </span>
            <select name="routeType" value={routeType} onChange={handleInputChange} >
              <option value="" disabled hidden>
                Select Route Type:
              </option>
                <option value="Out & Back">Out & Back</option>
							  <option value="Loop">Loop</option>
								<option value="Point to Point">Point to Point</option>
            </select>
          </label>
          <label>
            <span>Location: </span>
            <select name="location" value={location} onChange={handleInputChange} >
              <option value="" disabled hidden>
                Select State:
              </option>
                <option value="Alabama">Alabama</option>
								<option value="Alaska">Alaska</option>
								<option value="Arizona">Arizona</option>
								<option value="Arkansas">Arkansas</option>
								<option value="California">California</option>
								<option value="Colorado">Colorado</option>
								<option value="Connecticut">Connecticut</option>
								<option value="Delaware">Delaware</option>
								<option value="Florida">Florida</option>
								<option value="Georgia">Georgia</option>
								<option value="Hawaii">Hawaii</option>
								<option value="Idaho">Idaho</option>
								<option value="Illinois">Illinois</option>
								<option value="Indiana">Indiana</option>
								<option value="Iowa">Iowa</option>
								<option value="Kansas">Kansas</option>
								<option value="Kentucky">Kentucky</option>
								<option value="Louisiana">Louisiana</option>
								<option value="Maine">Maine</option>
								<option value="Maryland">Maryland</option>
								<option value="Massachusetts">Massachusetts</option>
								<option value="Michigan">Michigan</option>
								<option value="Minnesota">Minnesota</option>
								<option value="Mississippi">Mississippi</option>
								<option value="Missouri">Missouri</option>
								<option value="Montana">Montana</option>
								<option value="Nebraska">Nebraska</option>
								<option value="Nevada">Nevada</option>
								<option value="New Hampshire">New Hampshire</option>
								<option value="New Jersey">New Jersey</option>
								<option value="New Mexico">New Mexico</option>
								<option value="New York">New York</option>
								<option value="North Carolina">North Carolina</option>
								<option value="North Dakota">North Dakota</option>
								<option value="Ohio">Ohio</option>
								<option value="Oklahoma">Oklahoma</option>
								<option value="Oregon">Oregon</option>
								<option value="Pennsylvania">Pennsylvania</option>
								<option value="Rhode Island">Rhode Island</option>
								<option value="South Carolina">South Carolina</option>
								<option value="South Dakota">South Dakota</option>
								<option value="Tennessee">Tennessee</option>
								<option value="Texas">Texas</option>
								<option value="Utah">Utah</option>
								<option value="Vermont">Vermont</option>
								<option value="Virginia">Virginia</option>
								<option value="Washington">Washington</option>
								<option value="West Virginia">West Virginia</option>
								<option value="Wisconsin">Wisconsin</option>
								<option value="Wyoming">Wyoming</option>
            </select>
          </label>
          <label>
            <span>Trail Image: </span>
            <input type="file" name="picture" onChange={handleFileChange} />
          </label>
        </div>
      </section>
    )
  }

export default TrailForm;