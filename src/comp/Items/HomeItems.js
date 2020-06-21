import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Button from '../Elements/Button'
import Select from '../Elements/Select'

  const HomeItems  = (props) =><>
<div className="combo-item-container">
<div className="thumbnail-container">
<img src={props.thumb} alt="." />
</div>

  <div className="info-panel">
    <h1 className="item-name1">{props._name}</h1>
    <p className="item-weight1">
      <b>Weight:</b> {props.weight} kg</p>
    <p className="item-weight1">
      <b>Speed:</b> FAST</p>
    <div className="item-desc">
      <p>{props.desc}</p>
    </div>
  </div>

  <div className="selection-panel">
    <div className="select-container">
      <label for="blades">Blades:</label>
      <Select itemType="blades">
        <option value="" className="value">Air Koto</option>
        <option value="" className="value">Galaxy LQ-1</option>
        <option value="" className="value">Galaxy LQ-2</option>
      </Select>
    </div>

    <div className="select-container">
      <label for="rubbers">Rubber:</label>
      <Select itemType="rubbers">
        <option value="" className="value">Air TigerS</option>
        <option value="" className="value">Glove 888-1 w/ sponge</option>
        <option value="" className="value">Glove 889 w/ sponge</option>
      </Select>
    </div>


  <Button>${props.price} | Buy Now</Button>
  </div>
  </div><hr /></>

  export default HomeItems;
