import React, { useState, useCallback } from 'react';

function ProfesionalProfile() {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded);
  }, []);

  return (
    <div className="container">
      <h2 onClick={toggleExpand} className="toggle-header">Perfil profesional</h2>
      <div className={`collapse ${expanded ? 'show' : ''}`}>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut porta ipsum, vel dictum mi. Proin efficitur nunc quis pulvinar elementum. Vivamus sed purus tincidunt, faucibus sem in, dictum quam. Fusce ultricies odio finibus interdum rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in venenatis ligula. Maecenas congue, ipsum quis fringilla luctus, velit arcu blandit neque, at blandit mi sapien ac risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel tortor lacinia, efficitur augue nec, venenatis arcu. Quisque vitae pretium urna.
        </p>
      </div>
    </div>
  );
}

export default ProfesionalProfile;
