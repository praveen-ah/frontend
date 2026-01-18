import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

function Course(props) {

    //let purchased = false;
    const [purchased, setPurchased] = useState(false);
    const [price, setPrice] = useState(props.price);


    function BuyCourse(discount, e) {
        console.log(props.name, " purchased with ", discount, "% discount");
        setPurchased(true)
        console.log(purchased)
    }

    function ApplyDiscount(discount) {
        let discountedPrice = price - (price / discount)
        setPrice(discountedPrice)

    }
    return (
        props.name && <div className='card'>
            <img src={props.image || Sample} alt="" />
            <h3>{props.name}</h3>
            <p>Price: {price}</p>
            <span>Rating: {props.rating}</span><br /><br />
            <button onClick={(event) => BuyCourse(10, event)}>Buy Now</button>
            <br></br>
            <button onClick={() => ApplyDiscount(10)}>Apply Discount 10%</button>
            <br></br>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{purchased ? "Already Purchased" : "Ready to Buy"}</p>
        </div>
    );
}

Course.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    show: PropTypes.bool
}


export default Course