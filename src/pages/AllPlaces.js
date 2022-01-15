import { useState, useEffect } from 'react';
import PlaceList from "../places/PlaceList";


function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://destination-journal-dc34b-default-rtdb.firebaseio.com/places.json' //get data from database
        ).then(response => {
            return response.json();
        }).then(data => {
            const places = [];

            for (const key in data) {
                const place = {
                    id: key,
                    ...data[key] //gets the object values for each data entry
                };
                places.push(place)
            }
            setIsLoading(false);
            setLoadedPlaces(places)
        }); //this code executes whenever one of the variables in the dependencies array (next parameter) changes
    }, []);//in dependencies array, add all external values the effect function relies on



    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return <section>
        <h1>All Destinations</h1>
        <PlaceList places={loadedPlaces} />
    </section>;
}

export default AllMeetupsPage;