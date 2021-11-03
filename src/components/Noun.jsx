// import React,{useState} from "react";

const Noun = props =>{
    const {name, height, skin_color, birth_year, climate, gravity, population, title, director, release_date, opening_crawl, designation, classification, average_lifespan, model, manufacturer, cost_in_credits} = props.data;

    const parse= (url) => {
        let arr = url.split("/")
        return arr[4];
    }
    const dict= {
        people: <h1>Name: {name}<br/>Height: {height}<br/>Skin Color: {skin_color}<br/>Birth Year: {birth_year}</h1>,
        planets: <h1>Name: {name}<br/>Climate: {climate}<br/>Gravity: {gravity}<br/>Population: {population}</h1>,
        films: <h1>Title: {title}<br/>Director: {director}<br/>Release Date: {release_date}<br/>Opening Crawl: {opening_crawl}</h1>,
        species: <h1>Name: {name}<br/>Designation: {designation}<br/>Classification: {classification}<br/>Average Lifespan: {average_lifespan}</h1>,
        vehicles: <h1>Name: {name}<br/>Model: {model}<br/>Manufacturer: {manufacturer}<br/>Cost: {cost_in_credits} credits</h1>,
        starships: <h1>Name: {name}<br/>Model: {model}<br/>Manufacturer: {manufacturer}<br/>Cost: {cost_in_credits} credits</h1>,
    }
    const display= (term) => {
        return dict[term]
    }
    return (<>
        {display(parse(props.currentSearch))}</>
    )
}

export default Noun