"use client";
import { useAuth } from "@/context/AuthContext"
import { usePropWishlistContext } from "@/context/PropertyWishlist";
import PropertyCard from "./PropertyCard";
import '../styles/Profile_Component.css';


function Wishlist() {
    const { favorites } = usePropWishlistContext();
  
    if (favorites.length > 0) {
      return (
        <div className="wishlist">
            <div className="wish-text">
                <h2>Your Wishlisted Properties</h2>
            </div>
            <div className="wishlist-grid">
            {favorites.map((property) => (
              <PropertyCard property={property} key={property.id}/>
            ))}
            </div>
          </div>
      );
    }
  
    return (
      <div className="wishlist-empty">
        <h2>No Wishlisted properties Yet</h2>
        <p>Start adding properties to your wishlist and they will appear here!</p>
      </div>
    );
  }

export default function Profile_Component(){
    const { user, logout } = useAuth()

    return (
        <>
            <div className="profile-page">
                <div className="profile-navbar">
                    {user ? (
                    <div className="profile-dropdown">
                        <span>👤 {user.name}</span>
                        <div className="dropdown-content">
                            <p>Email: {user.email}</p>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                    ) : (
                        null
                    )}
                </div>

                <div className="wishlist-property-container">
                    <Wishlist />
                </div>
            </div>
        </>
    )
}