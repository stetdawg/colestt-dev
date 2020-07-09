import React,{Fragment, useState, useEffect} from 'react'

import inventory from '../../json/merchandise.json';

/*Search Function


*/
const onFilterChange = () => {
    // const filterChange = props.filterChange
    console.log("select filter")
}


const Filter = (props) =>{
    const [radioType, onRadioSelect ] = useState("accessories")
    const [categoryType, onRadioChange ] = useState(null) 
    let lastRadioType = []
    const arr = Object.keys(inventory)
    const categoryKey = Object.entries(inventory)
    const uniqueCategory = inventory[radioType]
            .map(x => x.category)
                     
    let unique = [...new Set(uniqueCategory)]
    useEffect(() => {
        //pull from json, print to unordered list 

       })
            return <> 
                       {arr.map(itemType => (
                <Fragment key={itemType}>
                <div className="container">
                    <input 
                    type="radio" 
                    id="dept" 
                    name="type" 
                    onClick={() => onRadioSelect(itemType)}
                    />
                    <label htmlFor="dept">
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
                    {unique.map(x => { 
                            return x ? <li> {x} </li> : null 
                    })}
                    </ul>
                </div>
            </div>
            </>
}





const  handleFilterChange = (e) => {
    
}


const SearchFilter = (props) => {


return <div className="shop-sidebar">
        <div>
        <p>Categories: </p>
    <Filter/>
        </div>
            

        </div>

}


export default SearchFilter