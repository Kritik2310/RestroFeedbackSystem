import { useEffect, useState } from 'react';
import { getRestaurants } from '../api/api';
import RestaurantCard from '../components/RestaurantCard';

export default function HomePage(){
  const [rests, setRests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    getRestaurants().then(res => {
      setRests(res.data);
    }).catch(err => console.error(err)).finally(()=> setLoading(false));
  },[]);

  return (
    <div>
      <h1>Restaurants in Mumbai</h1>
      <h4 className="tagline">Your Voice Makes Mumbai Tastier! — Add feedback and help others choose.</h4>
      {loading ? <p>Loading...</p> :
        <div 
            className="cards-grid"
            >
            {rests.map(r => <RestaurantCard key={r._id} rest={r} />)}
        </div>
      }
      
    </div>
  )
}
