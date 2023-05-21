
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "https://assets3.thrillist.com/v1/image/3125492/382x382/flatten;crop;matte=ffffff=center;webp=auto;jpeg_quality=60.jpg",
    "https://secure.img1-fg.wfcdn.com/im/35469521/resize-h755-w755%5Ecompr-r85/1014/101444428/Kids+Plush+Toy+Rocking+Horse.jpg",
    "https://i.ebayimg.com/images/g/qi4AAOSwl45jdtY7/s-l1600.jpg",
    "https://cdn.shopify.com/s/files/1/2281/5369/products/mountain-lion-132458_512x512.jpg?v=1610914473",
    "https://cdn.shopify.com/s/files/1/0570/7009/products/african-animal-6-set-for-toddlers-439247_1200x.jpg?v=1668268522",
    "https://images.othoba.com/images/thumbs/0383541_plastic-mini-jungle-animals-toys-6-piece-set-animal-collection-for-kids.jpeg",
    "https://images.othoba.com/images/thumbs/0383542_plastic-mini-jungle-animals-toys-6-piece-set-animal-collection-for-kids.jpeg",
    "https://cdn.shopify.com/s/files/1/0011/8367/8476/products/8_35f4f6ba-a767-4a5c-a966-f2536bb8b203_300x@2x.png?v=1680013762",
    "https://cdn.shopify.com/s/files/1/0011/8367/8476/products/5_e2677ff6-0fb1-4a25-b9cc-6b06717f16cc_1400x.png?v=1623315513"
    // Add more image URLs as needed
  ];

  return (
    <>
    <h1 className="text-center mt-5 mb-5 pt-5">Our Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
