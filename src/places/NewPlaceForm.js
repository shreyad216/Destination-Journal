import { useRef } from 'react';
import classes from './NewPlaceForm.module.css';
//form to add new places
function NewPlaceForm(props) {
    const titleInputRef = useRef();//get access to the input element
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();//don't reload the page
        //variables for the entered values
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const placeData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        props.onAddPlace(placeData);
    }

    return (
        <div className={classes.card}>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Destination Title</label> 
                    <input type="text" required id="title" ref={titleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Destination Image</label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Location</label>
                    <input type="text" required id="address" ref={addressInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Destination</button>
                </div>
            </form>
        </div>
    );
}

export default NewPlaceForm;