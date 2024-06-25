

// const playerCard = ({ legends }) => {
//   if (!legends || !Array.isArray(legends)) {
//     return <div>No data available</div>;
//   }
//   // return (
   
//   //   <div>
//   //   {legends.map((legend, index)=>(
//   //     <div key={index} style={{margin: '20px'}}>
//   //     <img src={legend.img} alt={legend.name} style={{width:'100px', height:'100px'}}/>
//   //     <p>{legend.name}</p>
//   //     <ul>
//   //   {legends.statistics.map((stat, i)=>(
//   //     <li key={i}>{stat}</li>
//   //   ))}
//   //   </ul>

//   //     </div>
     
//   //   ))}
//   //   <h1>Hello </h1>
//   //   </div>
   
//   // );
//   return (
//     <div>
//       {legends.map((legend, index) => (
//         <div key={index} style={{ margin: '20px' }}>
//           <img src={legend.img} alt={legend.name} style={{ width: '100px', height: '100px' }} />
//           <p>{legend.name}</p>
//           <ul>
//             {legend.statistics.map((stat, i) => (  // use legend.statistics.map here
//               <li key={i}>{stat}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
      
//     </div>
//   );
// };



// export default playerCard

import React, { useState } from 'react';

const PlayerCard = ({ legends }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (index) => {
    if (selectedPlayer === index) {
      setSelectedPlayer(null); // Deselect if the same player is clicked
    } else {
      setSelectedPlayer(index);
    }
  };

  return (
    <div>
      {legends.map((legend, index) => (
        <div
          key={index}
          style={{ margin: '20px', cursor: 'pointer', flex: '1 1 300px', textAlign: 'center' }}
          onClick={() => handlePlayerClick(index)}
        >
          
          {selectedPlayer === index ? (
            <ul>
              {legend.statistics.map((stat, i) => (
                <li key={i}>{stat}</li>
              ))}
            </ul>
          ) : (
            <img
              src={legend.img}
              alt={legend.name}
              style={{ width: '100px', height: '100px' }}
            />
            
          )
          
          }
          
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;

