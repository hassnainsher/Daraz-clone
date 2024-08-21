import RecipeReviewCard from "./CarousalCard";

const Carousal = () => {
  let flashSale = 'https://img.lazcdn.com/us/domino/0723898e-8803-4330-b78c-15f1010487e9_PK-1976-688.jpg_2200x2200q80.jpg_.webp';
  const Bright = "https://img.lazcdn.com/us/domino/d27d5b21-d25d-4f04-8468-ec8b3c917aea_PK-1976-688.jpg_2200x2200q80.jpg_.webp";
  const Stylo = "https://img.lazcdn.com/us/domino/d3ca2e88-5728-429b-bfc8-77a4f36af9f9_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
  return (
    <main>
      <div className="container-fluid bg-dark-subtle">
        <div className="row justify-content-center">
          <div className="col-7">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img src={flashSale} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={Bright} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Stylo} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* <div className="col-3">
            <RecipeReviewCard></RecipeReviewCard>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Carousal;
