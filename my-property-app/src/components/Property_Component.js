import '../styles/Property_Component.css';

const properties = [
    {
      id: 1,
      title: "Sky Heights",
      type: "Apartment",
      location: "Mumbai",
      price: 8500000,
      bedrooms: 2,
      bathrooms: 2,
      area: 950,
      amenities: ["Parking", "Balcony", "Elevator"],
      image: "./images/flat8.jpeg",
      contact: "99999 12345"
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
      image: "./images/villa1.jpeg",
      contact: "99999 23456"
    },
    {
      id: 3,
      title: "Green Nest",
      type: "Apartment",
      location: "Pune",
      price: 6700000,
      bedrooms: 2,
      bathrooms: 2,
      area: 880,
      amenities: ["Parking", "Elevator", "Garden"],
      image: "./images/flat2.jpeg",
      contact: "99999 34567"
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
      image: "./images/villa2.jpeg",
      contact: "99999 45678"
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
      image: "./images/villa7.jpeg",
      contact: "99999 56789"
    },
    {
      id: 6,
      title: "Palm Residency",
      type: "Apartment",
      location: "Ahmedabad",
      price: 7900000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1000,
      amenities: ["Pool", "Parking", "Elevator"],
      image: "./images/flat3.jpeg",
      contact: "99999 67890"
    },
    {
      id: 7,
      title: "Metro Heights",
      type: "Apartment",
      location: "Mumbai",
      price: 8700000,
      bedrooms: 2,
      bathrooms: 2,
      area: 950,
      amenities: ["Balcony", "Elevator", "Garden"],
      image: "./images/flat10.jpeg",
      contact: "99999 78901"
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
      image: "./images/villa3.jpeg",
      contact: "99999 89012"
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
      image: "./images/villa8.jpeg",
      contact: "99999 90123"
    },
    {
      id: 10,
      title: "Lake Pearl",
      type: "Apartment",
      location: "Pune",
      price: 7800000,
      bedrooms: 2,
      bathrooms: 2,
      area: 910,
      amenities: ["Balcony", "Parking", "Garden"],
      image: "./images/flat5.jpeg",
      contact: "99999 01234"
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
      image: "./images/villa4.jpeg",
      contact: "88888 11111"
    },
    {
      id: 12,
      title: "Nova Heights",
      type: "Apartment",
      location: "Bangalore",
      price: 8900000,
      bedrooms: 2,
      bathrooms: 2,
      area: 920,
      amenities: ["Balcony", "Parking", "Elevator"],
      image: "./images/flat9.jpeg",
      contact: "88888 22222"
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
      image: "./images/villa9.jpeg",
      contact: "88888 33333"
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
      amenities: ["Elevator", "Balcony", "Parking"],
      image: "./images/villa5.jpeg",
      contact: "88888 44444"
    },
    {
      id: 15,
      title: "Tranquil Rise",
      type: "Apartment",
      location: "Chennai",
      price: 7600000,
      bedrooms: 3,
      bathrooms: 2,
      area: 980,
      amenities: ["Garden", "Parking", "Balcony"],
      image: "./images/flat7.jpeg",
      contact: "88888 55555"
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
      image: "./images/villa10.jpeg",
      contact: "88888 66666"
    },
    {
      id: 17,
      title: "Ocean Crest",
      type: "Apartment",
      location: "Pune",
      price: 8100000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1020,
      amenities: ["Balcony", "Garden", "Elevator"],
      image: "./images/flat1.jpeg",
      contact: "88888 77777"
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
      image: "./images/villa6.jpeg",
      contact: "88888 88888"
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
      image: "./images/flat6.jpeg",
      contact: "88888 99999"
    },
    {
      id: 20,
      title: "Serene View",
      type: "Apartment",
      location: "Delhi",
      price: 9400000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1180,
      amenities: ["Garden", "Pool", "Elevator"],
      image: "./images/flat4.jpeg",
      contact: "77777 00000"
    }
  ];
  

  
function PropertyComponent(){
    return (
        <>
            <div className="prop-page">
                <div className="left-navbar">
                    <h1>Hello</h1>
                </div>

                <div className="property-container">
                    {
                        properties.map(elem => (
                            
                    <div className='property-cards' key={elem.id}>
                        <div className='prop-image'>
                            <img src={elem.image} />
                        </div>
                        <div className='prop-details'>
                            <h2>{elem.title}</h2>
                            <p><strong>{elem.bedrooms} BHK {elem.type}</strong> in {elem.location}</p>
                            <div className='prop-specs'>
                                <div className='prop-price'>
                                    <h3>₹{elem.price}</h3>
                                </div>
                                <div className='prop-area'>
                                    <h3>{elem.area} sqft</h3>
                                </div>
                            </div>
                            <div className='prop-highlights'>
                                {
                                    elem.amenities.map((highlight , index) => (

                                    <div className='prop-feat' key={index}>
                                        <h3>{highlight}</h3>
                                    </div>
                                    ))
                                }
                            </div>
                            <div className='prop-contact'>
                                <span>Contact Number:</span>
                                <span>{elem.contact}</span>
                            </div>
                            <div className='prop-view'>
                                <button className='view-btn'>View Property</button>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PropertyComponent