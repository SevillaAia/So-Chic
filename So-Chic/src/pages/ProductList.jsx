import React, {useState} from 'react'
import image from '../assets/defaultPic.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Velvet Matte Foundation",
      category: "Foundation",
      price: 24.99,
      shadeCount: 18,
      description: "Lightweight matte foundation with buildable coverage.",
      image: "/images/foundation-matte.jpg",
      rating: 4.6,
      inStock: true
    },
    {
      id: 2,
      name: "Hydra Glow Concealer",
      category: "Concealer",
      price: 14.99,
      shadeCount: 12,
      description: "Hydrating concealer that brightens and smooths.",
      image: "/images/concealer-glow.jpg",
      rating: 4.5,
      inStock: true
    },
    {
      id: 3,
      name: "Silky Pressed Powder",
      category: "Powder",
      price: 16.99,
      shadeCount: 6,
      description: "Sets makeup with a soft, natural finish.",
      image: "/images/pressed-powder.jpg",
      rating: 4.3,
      inStock: true
    },
    {
      id: 4,
      name: "Rose Flush Blush",
      category: "Blush",
      price: 12.99,
      shadeCount: 5,
      description: "Blendable blush for a healthy pop of color.",
      image: "/images/blush-rose.jpg",
      rating: 4.7,
      inStock: true
    },
    {
      id: 5,
      name: "Sunlit Bronzer",
      category: "Bronzer",
      price: 18.99,
      shadeCount: 4,
      description: "Warm bronzer for a natural sun-kissed look.",
      image: "/images/bronzer-sunlit.jpg",
      rating: 4.4,
      inStock: false
    },
    {
      id: 6,
      name: "Luminous Highlighter",
      category: "Highlighter",
      price: 15.99,
      shadeCount: 3,
      description: "Adds a soft, radiant glow to high points.",
      image: "/images/highlighter-luminous.jpg",
      rating: 4.8,
      inStock: true
    },
    {
      id: 7,
      name: "Everyday Eyeshadow Palette",
      category: "Eyeshadow",
      price: 29.99,
      shadeCount: 12,
      description: "Neutral shades perfect for daily looks.",
      image: "/images/eyeshadow-everyday.jpg",
      rating: 4.9,
      inStock: true
    },
    {
      id: 8,
      name: "Precision Liquid Eyeliner",
      category: "Eyeliner",
      price: 10.99,
      shadeCount: 2,
      description: "Smudge-resistant liner with ultra-fine tip.",
      image: "/images/eyeliner-liquid.jpg",
      rating: 4.5,
      inStock: true
    },
    {
      id: 9,
      name: "Volume Boost Mascara",
      category: "Mascara",
      price: 13.99,
      shadeCount: 2,
      description: "Builds volume without clumping.",
      image: "/images/mascara-volume.jpg",
      rating: 4.6,
      inStock: true
    },
    {
      id: 10,
      name: "Creamy Nude Lipstick",
      category: "Lipstick",
      price: 11.99,
      shadeCount: 8,
      description: "Smooth, moisturizing lipstick with rich color.",
      image: "/images/lipstick-nude.jpg",
      rating: 4.4,
      inStock: true
    },
    {
      id: 11,
      name: "Gloss Pop Lip Gloss",
      category: "Lip Gloss",
      price: 9.99,
      shadeCount: 6,
      description: "Non-sticky gloss with a high-shine finish.",
      image: "/images/lipgloss-pop.jpg",
      rating: 4.2,
      inStock: true
    },
    {
      id: 12,
      name: "Makeup Setting Spray",
      category: "Setting Spray",
      price: 17.99,
      shadeCount: 1,
      description: "Locks makeup in place all day.",
      image: "/images/setting-spray.jpg",
      rating: 4.6,
      inStock: true
    }
  ])

  const [counts, setCounts] = useState(0);

  return (
    <>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div>
              <button className="like-btn" onClick={() => setCounts(prev => ({
                ...prev,[product.id]: (prev[product.id] || 0) + 1
               }))
              }
            >
                <FontAwesomeIcon icon={faHeart} />
                <span>{counts[product.id] || 0}</span>
              </button>

           </div> 
            <img className="productImg" src={image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.category} — ${product.price}</p>
            <p>{product.description}</p>
            <div>
              <button className='add-btn'>Add to cart</button>
              <button className='add-btn'> Wishlist </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList