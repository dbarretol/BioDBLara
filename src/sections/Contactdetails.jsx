import React, { useEffect, useState } from 'react';

function ContactDetails() {
  const [contactDetails, setContactDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./../src/data/contactDetails.json');
        if (!response.ok) {
          throw new Error('Failed to fetch contact details');
        }
        const data = await response.json();
        setContactDetails(data);
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };

    fetchData();
  }, []);

  const renderContactDetails = (startIndex, endIndex) => {
    return contactDetails.slice(startIndex, endIndex).map((detail, index) => (
      <div key={index} className="col text-center">
        <img src={detail.src} alt={detail.alt} className="img-fluid" />
        {detail.link ? (
          <a href={detail.link} className="btn btn-link">
            {detail.text}
          </a>
        ) : (
          <span>{detail.text}</span>
        )}
      </div>
    ));
  };

  return (
    <div className="container text-center">
      <div className="row">
        {renderContactDetails(0, 2)}
      </div>
      <div className="row">
        {renderContactDetails(2, contactDetails.length)}
      </div>
    </div>
  );
}

export default ContactDetails;
