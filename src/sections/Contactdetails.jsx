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

  return (
    <div className="container text-center">
      <div className="row">
        {contactDetails.map((detail, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
            <img src={detail.src} alt={detail.alt} className="img-fluid" />
            {detail.link ? (
              <a href={detail.link} className="btn btn-link">
                {detail.text}
              </a>
            ) : (
              <span>{detail.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactDetails;