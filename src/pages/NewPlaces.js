import { useNavigate } from 'react-router-dom';

import NewPlaceForm from "../places/NewPlaceForm";

function NewPlaces() {
    const navigate = useNavigate();
    function addPlaceHandler(placeData) {
        fetch(
            'https://destination-journal-dc34b-default-rtdb.firebaseio.com/places.json',
            {
                method: 'POST',
                body: JSON.stringify(placeData),
                headers: {'Content-Type': 'application-json'}
            }
        ).then(() => {
            navigate('/')
        });
    }
    return (
        <section>
            <h1>Add New Destination</h1>
            <NewPlaceForm onAddPlace={addPlaceHandler}/>
        </section>
    );
}

export default NewPlaces;