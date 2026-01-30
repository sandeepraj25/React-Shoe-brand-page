const HeroSection = () => {
    return (
      <main className="Hero container">
        <div className="Hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
            WITH OUR SHOES.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>
  
          <div className="shopping">
            <p>Available now</p>
            <div className="brand-icons">
              <img src="/images/shops.png" alt="brand-logo" />
            </div>
          </div>
        </div> {/* ✅ CLOSED Hero-content */}
  
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="shoe" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;
  