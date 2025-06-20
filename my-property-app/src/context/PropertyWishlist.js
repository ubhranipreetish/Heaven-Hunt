"use client";
import {createContext, useState, useContext, useEffect} from "react"

const PropWishlistContext = createContext()

export const usePropWishlistContext = () => useContext(PropWishlistContext)

export const PropProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (property) => {
        setFavorites(prev => [...prev, property])
    }

    const removeFromFavorites = (propertyId) => {
        setFavorites(prev => prev.filter(property => property.id !== propertyId))
    }
    
    const isFavorite = (propertyId) => {
        return favorites.some(property => property.id === propertyId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <PropWishlistContext.Provider value={value}>
        {children}
    </PropWishlistContext.Provider>
}