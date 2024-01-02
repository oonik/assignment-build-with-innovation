/* eslint-disable */

const ProductCard = ({ product, handleCart }) => {
    const {title, thumbnail, images, price, description, id} = product;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={thumbnail} alt="Shoes" className="h-44 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className="text-sm font-semibold">Price: ${price}</h3>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleCart(product)} className="btn btn-warning text-white btn-sm">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;