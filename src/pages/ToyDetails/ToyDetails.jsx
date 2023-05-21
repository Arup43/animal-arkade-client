import { useLoaderData } from "react-router-dom";
import "./ToyDetails.css";

const ToyDetails = () => {
    const toy = useLoaderData();
    const {pictureUrl, name, price, rating, description, sellerName, sellerEmail, availableQuantity} = toy;

    return (
        <div className="text-center mt-5 pt-5">
            <div className="details-img">
                <img className="img-fluid" src={pictureUrl} />
            </div>
            <h1 className="text-success mt-5">{name}</h1>
            <h3 className="mt-4"><span className="text-success">Seller:</span> {sellerName}</h3>
            <h3 className="mt-4"><span className="text-success">Seller email:</span> {sellerEmail}</h3>
            <h3 className="mt-4"><span className="text-success">Price:</span> {price}</h3>
            <h3 className="mt-4"><span className="text-success">Rating:</span> {rating}</h3>
            <h3 className="mt-4"><span className="text-success">Available Quantity:</span> {availableQuantity}</h3>
            <h3 className="text-success mt-5">Description:</h3>
            <p className="mb-5 pb-5">{description}</p>
        </div>
    );
};

export default ToyDetails;