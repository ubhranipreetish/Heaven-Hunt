"use client";

import { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import PriceSlider from "./PriceSlider";

function handleCheckboxChange(value, selected, setSelected) {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
    console.log(selected,value)
  }
  

export default function Sidebar(props) {
    const {
        searchQuery, setSearchQuery,
        sortOption, setSortOption,
        priceRange, setPriceRange,
        selectedLocations, setSelectedLocations,
        selectedTypes, setSelectedTypes,
        selectedBedrooms, setSelectedBedrooms,
        selectedAmenities, setSelectedAmenities,
    } = props;

    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 750);
        handleResize();                          
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeSheet = () => setOpen(false);
    const locations = ["Ahmedabad","Bangalore","Chennai","Delhi","Hyderabad","Kolkata","Mumbai","Pune"]
    const bedroom_s = ["2","3","4"]
    const amenitie_s = ['Garden','Pool','Balcony','Parking','Elevator']

  
    return (
        <>
        <div className="sidebar-container">
            <div className="search-and-ham">
                <div className="search-bar">
                    <input
                    type="text"
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <button
                    className={`hamburger2 ${open ? "open2" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    <img src="/images/filter.png" />
                </button>
            </div>
        
            <div className={`sidebar ${ open ? "open2" : "" }`}>
                <div className="sort-and-filter">
                    <div className="sort-section">
                        <label className="sort-label">Sort by:</label>
                        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                            <option value="">Featured</option>
                            <option value="price-asc">Price Low to High</option>
                            <option value="price-desc">Price High to Low</option>
                            <option value="area-asc">Area Smallest to Largest</option>
                            <option value="area-desc">Area Largest to Smallest</option>
                        </select>
                    </div>
                    
            
                    
                    <div className="filter-section">
                        <h1>Filters</h1>

                        <PriceSlider values={priceRange} setValues={setPriceRange} />

                        <div className="various-filter">
                            <div className="location filter-tags">
                                <h4>Location:</h4>
                                <ul>
                                    {
                                        locations.map((elem,idx) => (
                                            <li key={idx}>
                                            <input
                                                type="checkbox"
                                                id={elem}
                                                checked={selectedLocations.includes(elem)}
                                                onChange={() =>
                                                    handleCheckboxChange(elem, selectedLocations, setSelectedLocations)}
                                            />

                                                <label htmlFor={elem}>{elem}</label>
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="prop-type filter-tags">
                                <h4>Property Type:</h4>
                                <ul>
                                    <li>
                                        <input
                                                type="checkbox"
                                                id='Flat'
                                                checked={selectedTypes.includes('Flat')}
                                                onChange={() =>
                                                    handleCheckboxChange('Flat', selectedTypes, setSelectedTypes)}
                                            />
                                        <label htmlFor="Flat">Flat</label>
                                    </li>
                                    <li>
                                        <input
                                                type="checkbox"
                                                id='Villa'
                                                checked={selectedTypes.includes('Villa')}
                                                onChange={() =>
                                                    handleCheckboxChange('Villa', selectedTypes, setSelectedTypes)}
                                            />
                                        <label htmlFor="Villa">Villa</label>
                                    </li>
                                
                                </ul>
                            </div>
                            <div className="bedrooms filter-tags">
                                <h4>Bedrooms:</h4>
                                <ul>
                                    {
                                        bedroom_s.map((elem,idx) => (
                                    <li key={idx}>
                                        <input
                                                type="checkbox"
                                                id={elem}
                                                checked={selectedBedrooms.includes(elem)}
                                                onChange={() =>
                                                    handleCheckboxChange(elem, selectedBedrooms, setSelectedBedrooms)
                                                }
                                            />
                                        <label htmlFor={elem}>{elem} BHK</label>
                                    </li>

                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="amenities filter-tags">
                                <h4>Amenities:</h4>
                                <ul>
                                    {
                                        amenitie_s.map((elem,idx) => (
                                    <li key={idx}>
                                        <input
                                                type="checkbox"
                                                id={elem}
                                                checked={selectedAmenities.includes(elem)}
                                                onChange={() =>
                                                    handleCheckboxChange(elem, selectedAmenities, setSelectedAmenities)}
                                            />
                                        <label htmlFor={elem}>{elem}</label>
                                    </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="filter-action">
                        <button
                            onClick={() => {
                            setPriceRange([6000000, 13000000]);
                            setSelectedLocations([]);
                            setSelectedTypes([]);
                            setSelectedBedrooms([]);
                            setSelectedAmenities([]);
                            setSortOption("");
                            setSearchQuery("");
                            closeSheet();           
                            }}
                        >
                            Clear All
                        </button>
                    </div>
                </div>
        
            </div>
        </div>
        </>
      );
    }

