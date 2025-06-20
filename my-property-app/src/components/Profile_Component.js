"use client";
import { useAuth } from "@/context/AuthContext"
import { usePropWishlistContext } from "@/context/PropertyWishlist";
import Welcome_Component from "./Welcome_Component";
import PropertyCard from "./PropertyCard";

function Wishlist() {
    const { favorites } = usePropWishlistContext();
  
    if (favorites.length > 0) {
      return (
        <div className="favorites">
          <h2>Your Favorites</h2>
          <div className="properties-grid">
            {favorites.map((property) => (
              <PropertyCard property={property} key={property.id}/>
            ))}
          </div>
        </div>
      );
    }
  
    return (
      <div className="favorites-empty">
        <h2>No Favorite propertys Yet</h2>
        <p>Start adding propertys to your favorites and they will appear here!</p>
      </div>
    );
  }

export default function Profile_Component(){
    const { user, logout } = useAuth()

    return (
        <>
            <div className="right">
                {user ? (
                <div className="profile-dropdown">
                    <span>👤 {user.name}</span>
                    <div className="dropdown-content">
                        <p>Email: {user.email}</p>
                        <button onClick={logout}>Logout</button>
                    </div>
                    <div>
                        <Wishlist />
                    </div>
                </div>
                ) : (
                    null
                )}
            </div>
        </>
    )
}