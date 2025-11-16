require('dotenv').config();
const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');

const restaurants = [
  {
    name: "Pizza By the Bay",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/02/15/38/pizza-by-the-bay.jpg",
    description: "Cozy cafe with sea view and quick bites.",
    location: "Marine Drive"
  },
  {
    name: "Leopald Cafe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwp3hazY0WTLd9h-vqObmEhdttQxBTi1kAQ&s",
    description: "Classic Mumbai flavors and thalis.",
    location: "Colaba"
  },
  {
    name: "Bandra Cafe",
    image: "https://b.zmtcdn.com/data/pictures/2/19956952/89d37a888b315ed8d346145285832797.jpeg",
    description: "Trendy hangout with great desserts.",
    location: "Bandra"
  },
  {
    name: "Fable Cafe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwlyB4Yn1lASzh_oHkfbN3Hd2REplEIhXMg&s",
    description: "Family restaurant and buffet nights.",
    location: "Powai"
  },
  {
    name: "Aromas CAFE & BISTRO",
    image: "https://cdn.venuelook.com/uploads/space_17845/1553598609_595x400.png",
    description: "Tasty street-food inspired menu.",
    location: "Andheri"
  }
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async ()=> {
  console.log('Connected to DB — seeding...');
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(restaurants);
  console.log('Seeded restaurants');
  mongoose.disconnect();
})
.catch(err => {
  console.error(err);
});
