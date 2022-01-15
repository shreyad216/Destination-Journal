import { useContext } from 'react';
import classes from './PlaceItem.module.css';
function PlaceItem(props) {
   // const favoritesCtx = useContext(FavoritesContext) //stores the context object from favorites-context
   // const isItemFavorite = favoritesCtx.isItemFavorite(props.id);

    // function toggleFavoriteStatusHandler() {
    //     if (isItemFavorite) {
    //         favoritesCtx.removeFavorite(props.id);
    //     } else {
    //         favoritesCtx.addFavorite({//use {} to construct an object on the spot
    //             id: props.id,
    //             title: props.title,
    //             description: props.description,
    //             image: props.image,
    //             address: props.address
    //         })
    //     }
    // }

    return (
        <li className={classes.item}>
            <div className={classes.card}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className={props.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            </div>
        </li >
        
    );
}

export default PlaceItem;