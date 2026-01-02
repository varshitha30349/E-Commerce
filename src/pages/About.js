function About() {
  return (
    <div style={{ padding: "60px 80px", maxWidth: "900px", margin: "auto" }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        About Wow Pickles
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px" }}>
        <strong>Wow Pickles</strong> is a homemade pickle brand prepared with
        traditional recipes and a lot of love. Every pickle is made in small
        batches using fresh ingredients, authentic spices, and time-tested
        methods passed down through generations.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "30px" }}>
        Our products are free from artificial preservatives and are prepared
        with the same care and hygiene as food made at home. From spicy non-veg
        pickles to flavorful veg pickles and aromatic podis, we focus on taste,
        quality, and authenticity.
      </p>

      {/* Why Choose Us */}
      <h2 style={{ marginBottom: "15px" }}>Why Choose Us</h2>

      <ul style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "35px" }}>
        <li>Homemade and hygienic preparation</li>
        <li>Fresh, high-quality ingredients</li>
        <li>No artificial preservatives</li>
        <li>Traditional recipes and authentic taste</li>
        <li>Prepared in small batches with care</li>
      </ul>

      {/* 4 Steps Section */}
      <h2 style={{ marginBottom: "20px" }}>How We Prepare</h2>

      <div style={{ fontSize: "18px", lineHeight: "1.8" }}>
        <p>
          <strong>Step 1: Fresh Ingredients</strong><br />
          We carefully select fresh vegetables, meats, and spices to ensure the
          best quality and taste in every batch.
        </p>

        <p>
          <strong>Step 2: Traditional Preparation</strong><br />
          All pickles are prepared using traditional recipes and age-old methods
          followed in home kitchens.
        </p>

        <p>
          <strong>Step 3: Hygienic Processing</strong><br />
          Each step is handled with utmost cleanliness and care, just like food
          prepared for family members.
        </p>

        <p>
          <strong>Step 4: Packed with Love</strong><br />
          Pickles are packed in clean containers and sealed carefully to retain
          freshness, flavor, and mom’s love 💖.
        </p>
      </div>

    </div>
  );
}

export default About;
