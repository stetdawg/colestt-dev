import React,{Fragment, useState, useEffect} from 'react'

import inventory from '../../json/inventory.json';

/*Search Function


*/
const onFilterChange = () => {
    // const filterChange = props.filterChange
    console.log("select filter")
}

const Filter = (inven) =>{
    const [radioType, onRadioSelect ] = useState("Rubbers")
    const [categoryType, onRadioChange ] = useState(null) 
    let lastRadioType = []
    const arr = []
    const categoryKey = Object.keys(inventory)
    const categoryVal = Object.values (inventory)
    useEffect(() => {
        //pull from json, print to unordered list
        //if radio type =
         
       })
            return <> 
                {categoryKey.map(itemType => (
                <Fragment key={itemType}>
                <div className="container">
                    <input 
                    type="radio" 
                    id="accessories" 
                    name="type" 
                    onClick={() => onRadioSelect(itemType)}
                    />
                    <label htmlFor="accessories">
                        {itemType}
                    </label>
                </div> 
                </Fragment>
                ))      
                }   
                

            <div className="department">
                <div className="selection">
                <p>{radioType}</p>
                    <ul>
                        <li></li>
                        <li>{}</li>
                        <li>{}</li>
                        <li>{}</li>
                        <li>{}</li>
                    </ul>
                </div>
            </div>
            </>
}





const  handleFilterChange = (e) => {
    
}


const SearchFilterCopy = (props) => {


return <div className="shop-sidebar">
        <div>
        <p>Categories: </p>
    <Filter/>
        </div>
            

        </div>

}


export default SearchFilterCopy