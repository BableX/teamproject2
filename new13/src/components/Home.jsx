import React from 'react';
import { MapPin, Search, User } from 'lucide-react';
import styles from '../styles/home.module.css';


function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navContent}>
          
          {/* alt-logo - Секция логотипа */}
          <div className={styles.logoContainer}>
             <img 
               src=".png" 
               alt="FoodWagon Logo" 
               className={styles.logoImage} 
             />
          </div>

          <div className={styles.deliveryInfo}>
            <span className={styles.deliverTo}>Deliver to:</span>
            <div className={styles.location}>
              <MapPin size={18} className={styles.pinIcon} />
              <span>Current Location <strong>Mohammadpur Bus Stand, Dhaka</strong></span>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.searchBtn}>
              <Search size={18} />
              <span>Search Food</span>
            </button>
            <button className={styles.loginBtn}>
              <User size={18} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Are you starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
            
            <div className={styles.searchCard}>
              <div className={styles.tabs}>
                <button className={styles.tabActive}>Delivery</button>
                <button className={styles.tab}>Pickup</button>
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Enter Your Address" />
                <button className={styles.findFoodBtn}>Find Food</button>
              </div>
            </div>
          </div>
          
          {/* Место для большой картинки еды справа */}
          <div className={styles.heroImageContainer}>
            <img src="/Header.png" alt="Starving?" className={styles.heroImage} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;