import "./catalog.css";

const restaurants = [
  {
    name: "Foodworld",
    rating: 46,
    status: "Opens tomorrow",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    discount: "20% off"
  },
  {
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    discount: "15% off"
  },
  {
    name: "Donuts hut",
    rating: 20,
    status: "Open Now",
    img: "https://images.unsplash.com/photo-1505253210343-5d3e8e5eaa63",
    discount: "10% off"
  },
  {
    name: "Donuts hut",
    rating: 50,
    status: "Open Now",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    discount: "15% off"
  },
  {
    name: "Ruby Tuesday",
    rating: 26,
    status: "Open Now",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    discount: "10% off"
  },
  {
    name: "Kuakata Fried Chicken",
    rating: 53,
    status: "Open Now",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    discount: "25% off"
  },
  {
    name: "Red Square",
    rating: 45,
    status: "Open Now",
    img: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
    discount: "10% off"
  },
  {
    name: "Taco Bell",
    rating: 35,
    status: "Open Now",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    discount: "10% off"
  }
];

export default function Catalog() {
  return (
    <section className="container">
      <h2 className="title">Featured Restaurants</h2>

      <div className="grid">
        {restaurants.map((item, i) => (
          <div key={i} className="card">
            
            <div className="imgBox">
              <img src={item.img} alt={item.name} />

              <div className="badge discount">{item.discount}</div>
              <div className="badge fast">Fast</div>
            </div>

            <div className="info">
              <h3>{item.name}</h3>
              <p className="rating">⭐ {item.rating}</p>

              <span
                className={
                  item.status === "Open Now"
                    ? "status open"
                    : "status closed"
                }
              >
                {item.status}
              </span>
            </div>

          </div>
        ))}
      </div>

      <button className="viewBtn">View All</button>
    </section>
  );
}