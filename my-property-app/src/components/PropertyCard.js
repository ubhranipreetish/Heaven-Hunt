"use client";
import { useState } from "react";
import { usePropWishlistContext } from "@/context/PropertyWishlist";
import "../styles/PropertyCard.css"



function PropertyCard({property}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = usePropWishlistContext()
    const favorite = isFavorite(property.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(property.id)
        else addToFavorites(property)
    }


    return (
        <div className='property-cards' key={property.id}>
            <div className='prop-image'>
                <img src={property.image} alt={property.title} />
                <div className="prop-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className='prop-details'>
                <h2>{property.title}</h2>
                <p><strong>{property.bedrooms} BHK {property.type}</strong> in {property.location}</p>
                <div className='prop-specs'>
                    <div className='prop-price'>
                        <h3>₹{property.price}</h3>
                    </div>
                    <div className='prop-area'>
                        <h3>{property.area} sqft</h3>
                    </div>
                </div>
                <div className='prop-highlights'>
                    {
                        property.amenities.map((highlight , index) => (

                        <div className='prop-feat' key={index}>
                            <h3>{highlight}</h3>
                        </div>
                        ))
                    }
                </div>
                <div className='prop-contact'>
                    <span>Contact Number:</span>
                    <span>{property.contact}</span>
                </div>
                <div className='prop-view'>
                    <button className='view-btn'>View Property</button>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard