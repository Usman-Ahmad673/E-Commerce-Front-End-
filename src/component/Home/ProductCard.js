import React from 'react'
import { Link } from 'react-router-dom'
// import '../Home/Home.css'
import ReactStars from 'react-rating-stars-component'
// import { Rating } from "@material-ui/lab";


const ProductCard = ({product}) => {
    const options = {
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor: "tomato",
        value:product.ratings,
        isHalf:true,
    }
    return (
        


        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                {/* <Rating {...options} /> <span>(${product.numbOfReviews} Reviews)</span> */}
                <ReactStars {...options} /> <span>(${product.numbOfReviews} Reviews)</span>
            </div>
            <span>{`RS ${product.price}`}</span>
        </Link>
        
        

    )
}

export default ProductCard
