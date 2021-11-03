import React,{useState} from "react";

const Form = props =>{
    const [personOrPlanet, setPersonOrPlanet] = useState("");
    const [id, setId] = useState("");
    const createSearch = (e) => {
        e.preventDefault();
        const newSearch = `${personOrPlanet}${id}`;
        props.onNewSearch(newSearch)
    };

    return (
        <form onSubmit={ createSearch }>
            <div> 
                <label>Search for: </label> 
                <select name="personOrPlanet" id="personOrPlace" onChange={ (e) => setPersonOrPlanet(e.target.value)} >
                    <option value="">Choose</option>
                    {props.categories.map((category, i)=>{
                        return (<option value={category[1]}>{category[0]}</option>)
                    }
                )}
                </select>
            </div>
            <div>
                <label>ID: </label> 
                <input type="number" onChange={ (e) => setId(e.target.value) } />
            </div>
            <input type="submit" value="Search" />
        </form>)
}

export default Form