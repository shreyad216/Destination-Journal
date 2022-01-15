import PlaceItem from './PlaceItem';
import classes from './PlaceList.module.css';

//list of all places
//passes props to PlaceItem.js to get each individual place

function PlaceList(props) {
    return (
        <ul className={classes.list}>
            {props.places.map(place => (
            <PlaceItem 
            key={place.id} 
            id={place.id} 
            image={place.image} 
            title={place.title} 
            address={place.address}
            description={place.description}
            />))}
        </ul>
    );
}

export default PlaceList;