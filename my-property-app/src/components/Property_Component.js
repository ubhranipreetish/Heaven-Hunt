"use client";

import React, { useState, useEffect } from "react";
import '../styles/Property_Component.css';
import Image from 'next/image'
import Sidebar from "./Sidebar";
import PropertyCard from "./PropertyCard";


const properties = [
    {
      id: 1,
      title: "Sky Heights",
      type: "Flat",
      location: "Mumbai",
      price: 8500000,
      bedrooms: 2,
      bathrooms: 2,
      area: 950,
      amenities: ["Parking", "Balcony", "Elevator"],
      image: "/images/flat8.jpeg",
      contact: "99999 12345",
      wishlist: false
    },
    {
      id: 2,
      title: "Ocean View",
      type: "Villa",
      location: "Delhi",
      price: 12500000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1450,
      amenities: ["Garden", "Pool", "Balcony"],
      image: "/images/villa1.jpeg",
      contact: "99999 23456",
      wishlist: false
    },
    {
      id: 3,
      title: "Green Nest",
      type: "Flat",
      location: "Pune",
      price: 6700000,
      bedrooms: 2,
      bathrooms: 2,
      area: 880,
      amenities: ["Parking", "Elevator", "Garden"],
      image: "/images/flat4.jpeg",
      contact: "99999 34567",
      wishlist: false
    },
    {
      id: 4,
      title: "Sunrise Villa",
      type: "Villa",
      location: "Bangalore",
      price: 9800000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1320,
      amenities: ["Pool", "Balcony", "Parking"],
      image: "/images/villa6.jpeg",
      contact: "99999 45678",
      wishlist: false
    },
    {
      id: 5,
      title: "Hill Homes",
      type: "Villa",
      location: "Hyderabad",
      price: 7200000,
      bedrooms: 2,
      bathrooms: 2,
      area: 900,
      amenities: ["Elevator", "Garden", "Balcony"],
      image: "/images/villa7.jpeg",
      contact: "99999 56789",
      wishlist: false
    },
    {
      id: 6,
      title: "Palm Residency",
      type: "Flat",
      location: "Ahmedabad",
      price: 7900000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1000,
      amenities: ["Pool", "Parking", "Elevator"],
      image: "/images/flat2.jpeg",
      contact: "99999 67890",
      wishlist: false
    },
    {
      id: 7,
      title: "Metro Heights",
      type: "Flat",
      location: "Mumbai",
      price: 8700000,
      bedrooms: 2,
      bathrooms: 2,
      area: 950,
      amenities: ["Balcony", "Elevator", "Garden"],
      image: "/images/flat10.jpeg",
      contact: "99999 78901",
      wishlist: false
    },
    {
      id: 8,
      title: "Blue Horizon",
      type: "Villa",
      location: "Kolkata",
      price: 9900000,
      bedrooms: 4,
      bathrooms: 3,
      area: 1500,
      amenities: ["Pool", "Garden", "Balcony"],
      image: "/images/villa3.jpeg",
      contact: "99999 89012",
      wishlist: false
    },
    {
      id: 9,
      title: "Maple Grove",
      type: "Villa",
      location: "Chennai",
      price: 7100000,
      bedrooms: 2,
      bathrooms: 1,
      area: 850,
      amenities: ["Parking", "Elevator", "Pool"],
      image: "/images/villa8.jpeg",
      contact: "99999 90123",
      wishlist: false
    },
    {
      id: 10,
      title: "Lake Pearl",
      type: "Flat",
      location: "Pune",
      price: 7800000,
      bedrooms: 2,
      bathrooms: 2,
      area: 910,
      amenities: ["Balcony", "Parking", "Garden"],
      image: "/images/flat5.jpeg",
      contact: "99999 01234",
      wishlist: false
    },
    {
      id: 11,
      title: "Green Estate",
      type: "Villa",
      location: "Delhi",
      price: 10500000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1400,
      amenities: ["Garden", "Elevator", "Pool"],
      image: "/images/villa9.jpeg",
      contact: "88888 11111",
      wishlist: false
    },
    {
      id: 12,
      title: "Nova Heights",
      type: "Flat",
      location: "Bangalore",
      price: 8900000,
      bedrooms: 2,
      bathrooms: 2,
      area: 920,
      amenities: ["Balcony", "Parking", "Elevator"],
      image: "/images/flat9.jpeg",
      contact: "88888 22222",
      wishlist: false
    },
    {
      id: 13,
      title: "Urban Nest",
      type: "Villa",
      location: "Ahmedabad",
      price: 6400000,
      bedrooms: 2,
      bathrooms: 1,
      area: 820,
      amenities: ["Garden", "Pool", "Parking"],
      image: "/images/villa5.jpeg",
      contact: "88888 33333",
      wishlist: false
    },
    {
      id: 14,
      title: "Royal Enclave",
      type: "Villa",
      location: "Hyderabad",
      price: 11800000,
      bedrooms: 4,
      bathrooms: 4,
      area: 1600,
      amenities: ["Garden", "Balcony", "Parking"],
      image: "/images/villa10.jpeg",
      contact: "88888 44444",
      wishlist: false
    },
    {
      id: 15,
      title: "Tranquil Rise",
      type: "Flat",
      location: "Chennai",
      price: 7600000,
      bedrooms: 3,
      bathrooms: 2,
      area: 980,
      amenities: ["Garden", "Parking", "Balcony"],
      image: "/images/flat7.jpeg",
      contact: "88888 55555",
      wishlist: false
    },
    {
      id: 16,
      title: "Sunset Arc",
      type: "Villa",
      location: "Mumbai",
      price: 6900000,
      bedrooms: 2,
      bathrooms: 2,
      area: 860,
      amenities: ["Elevator", "Pool", "Parking"],
      image: "/images/villa4.jpeg",
      contact: "88888 66666",
      wishlist: false
    },
    {
      id: 17,
      title: "Ocean Crest",
      type: "Flat",
      location: "Pune",
      price: 8100000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1020,
      amenities: ["Balcony", "Garden", "Elevator"],
      image: "/images/flat3.jpeg",
      contact: "88888 77777",
      wishlist: false
    },
    {
      id: 18,
      title: "Amber Grove",
      type: "Villa",
      location: "Bangalore",
      price: 11000000,
      bedrooms: 4,
      bathrooms: 4,
      area: 1550,
      amenities: ["Pool", "Garden", "Parking"],
      image: "/images/villa2.jpeg",
      contact: "88888 88888",
      wishlist: false
    },
    {
      id: 19,
      title: "Pine Crest",
      type: "Flat",
      location: "Hyderabad",
      price: 7300000,
      bedrooms: 2,
      bathrooms: 2,
      area: 880,
      amenities: ["Balcony", "Elevator", "Parking"],
      image: "/images/flat6.jpeg",
      contact: "88888 99999",
      wishlist: false
    },
    {
      id: 20,
      title: "Serene View",
      type: "Flat",
      location: "Delhi",
      price: 9400000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1180,
      amenities: ["Garden", "Pool", "Elevator"],
      image: "/images/flat1.jpeg",
      contact: "77777 00000",
      wishlist: false
    }
  ];

  
  
  
  
  function PropertyComponent(){
      const [sortOption, setSortOption] = useState("");
      const [priceRange, setPriceRange] = useState([6000000, 13000000]);
      const [selectedLocations, setSelectedLocations] = useState([]);
      const [selectedTypes, setSelectedTypes] = useState([]);
      const [selectedBedrooms, setSelectedBedrooms] = useState([]);
      const [selectedAmenities, setSelectedAmenities] = useState([]);
      const [sortedProperties, setSortedProperties] = useState(properties);
      const [searchQuery, setSearchQuery] = useState("");



    useEffect(() => {
        let sorted = [...properties];
        switch (sortOption) {
            case "price-asc":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                sorted.sort((a, b) => b.price - a.price);
                break;
            case "area-asc":
                sorted.sort((a, b) => a.area - b.area);
                break;
            case "area-desc":
                sorted.sort((a, b) => b.area - a.area);
                break;

            default:
                break;
        }
        setSortedProperties(sorted);
    }, [sortOption, properties]);

    const filteredProperties = properties
        .filter((p) => {
            const query = searchQuery.toLowerCase()
            const searchOk = p.title.toLowerCase().includes(query) || p.location.toLowerCase().includes(query)
            const priceOk = p.price >= priceRange[0] && p.price <= priceRange[1];
            const locOk = selectedLocations.length === 0 || selectedLocations.includes(p.location);
            const typeOk = selectedTypes.length === 0 || selectedTypes.includes(p.type);
            const bedOk = selectedBedrooms.length === 0 || selectedBedrooms.includes(`${p.bedrooms}`);
            const amenityOk = selectedAmenities.every((a) => p.amenities.includes(a));

            return searchOk && priceOk && locOk && typeOk && bedOk && amenityOk;
        })
        .sort((a, b) => {
            switch (sortOption) {
            case "price-asc": return a.price - b.price;
            case "price-desc": return b.price - a.price;
            case "area-asc": return a.area - b.area;
            case "area-desc": return b.area - a.area;
            default: return 0;
            }
        });




    return (
        <>
            <div className="prop-page">
                <div className="left-navbar">
                <Sidebar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedLocations={selectedLocations}
                    setSelectedLocations={setSelectedLocations}
                    selectedTypes={selectedTypes}
                    setSelectedTypes={setSelectedTypes}
                    selectedBedrooms={selectedBedrooms}
                    setSelectedBedrooms={setSelectedBedrooms}
                    selectedAmenities={selectedAmenities}
                    setSelectedAmenities={setSelectedAmenities}
                />

                </div>

                {filteredProperties.length > 0 ?
                  (
                    <div className="property-container found">
                      {
                          filteredProperties.map((elem,idx) => (
                              <PropertyCard property={elem} key={idx}/>
                            ))
                          }
                    </div>
                  ) : (
                    <div className="property-container not-found">
                      <h2>No Properties Found</h2>
                    </div>
                  )
                  
                }
            </div>
        </>
    )
}

export default PropertyComponent