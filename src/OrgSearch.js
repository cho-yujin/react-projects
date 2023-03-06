import React from 'react';

const OrgSearch = ({ organism }) => {
    return(
        <div className="organism">
          <div>
            <h2>{organism.name['name-USen']}</h2>
          </div>

          <div className="img">
            <img src={organism.icon_uri} alt={organism.name['name-USen']} />
          </div>
          
          <div>
            <p>
                {organism.availability['location']} • {organism.availability['rarity']}<br></br>
                Sells for: {organism.price}<br></br>
            </p>
          </div>
        </div>
        
    );
}

export default OrgSearch;