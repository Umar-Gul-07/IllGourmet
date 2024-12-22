import React from 'react'

const Manue = () => {
  return (
    <>
      <section className="pager-section text-center">
  <div className="fixed-bg bg4" />
  <div className="container">
    <div className="pager-head">
      <h2>bulgarian restaurant</h2>
      <ul>
        <li>
          <a href="#" title="">
            Home
          </a>
        </li>
        <li>
          <a href="#" title="">
            Restaurants
          </a>
        </li>
        <li>
          <span>bulgarian restaurant</span>
        </li>
      </ul>
    </div>
    {/*pager-head end*/}
  </div>
</section>


<section className="sec-block">
  <div className="container">
    <div className="restaurant-details">
      <div className="food-thumbail-large">
        <img
          src="assets/images/resources/food-large.jpg"
          alt=""
          className="w-100"
        />
        <div className="pl-logo">
          <img src="assets/images/resources/logo5.png" alt="" />
        </div>
      </div>
      <div className="food-info">
        <ul className="meta">
          <li>
            <img src="assets/images/icons/calendar.svg" alt="" />
            <span>Monday - Sunday</span>
          </li>
          <li>
            <img src="assets/images/icons/clock.svg" alt="" />
            <span>9:00am - 11:00pm</span>
          </li>
          <li>
            <span>3 Reviews</span>
            <ul className="rating">
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
            </ul>
          </li>
        </ul>
        <h4>
          Exercitation pariatur ipsum magna occaecat quis eiusmod magna. Non
          nulla commodo laborum magna id.
        </h4>
        <p>
          Consequat excepteur eu veniam sunt duis ut do pariatur voluptate ex
          fugiat. Sit exercitation occaecat exercitation officia enim
          exercitation sunt. Exercitation pariatur ipsum magna occaecat quis
          eiusmod magna. Non nulla commodo laborum magna id. Deserunt irure amet
          adipisicing adipisicing veniam nostrud Lorem anim non voluptate culpa
          sit. Et veniam dolor reprehenderit non. Ut laboris pariatur tempor
          pariatur pariatur ad enim veniam duis. Exercitation sint eiusmod amet
          reprehenderit ipsum
        </p>
      </div>
    </div>
    {/*restaurant-details end*/}
  </div>
</section>


<section className="sec-block p-0">
  <div className="container">
    <div className="section-title text-center">
      <span>Amazing taste </span>
      <h2 className="text-capitalize">Menu</h2>
    </div>
    {/*sec-title end*/}
    <div className="popular-dishes style2 text-center">
      <div className="options">
        <div className="option-isotop">
          <ul
            id="filter"
            className="option-set filters-nav"
            data-option-key="filter"
          >
            <li>
              <a className="selected" data-option-value=".meat">
                Meat
              </a>
            </li>
            <li>
              <a data-option-value=".pizza">Pizza</a>
            </li>
            <li>
              <a data-option-value=".fastfood">Fastfood</a>
            </li>
            <li>
              <a data-option-value=".sushi">Sushi</a>
            </li>
            <li>
              <a data-option-value=".vegitarian">Vegitarian food</a>
            </li>
          </ul>
        </div>
      </div>
      {/*options end*/}
      <div className="row">
        <div
          className="masonary"
          style={{ position: "relative", height: "1182.75px" }}
        >
          <div
            className="col-lg-4 col-md-4 col-sm-6 meat pizza"
            style={{ position: "absolute", left: 0, top: 0 }}
          >
            <div className="pd-item">
              <div className="pd-thumbnail">
                <img
                  src="assets/images/resources/blg1.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <h3 className="semi-bold text-capitalize">
                <a href="#" title="">
                  Rib-eye Steaks
                </a>{" "}
              </h3>
              <p>Few things are better than a properly grilled steak.</p>
              <strong className="semi-bold">$15.69</strong>
              <a
                href="/cart"
                title=""
                className="btn-default gradient-bg half-radius height-2"
              >
                Add to cart <span />
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-6 meat fastfood"
            style={{ position: "absolute", left: 379, top: 0 }}
          >
            <div className="pd-item">
              <div className="pd-thumbnail">
                <img
                  src="assets/images/resources/blg2.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <h3 className="semi-bold text-capitalize">
                <a href="#" title="">
                  Top Sirloin Steaks
                </a>{" "}
              </h3>
              <p>Few things are better than a properly grilled steak.</p>
              <strong className="semi-bold">$25.39</strong>
              <a
                href="/cart"
                title=""
                className="btn-default gradient-bg half-radius height-2"
              >
                Add to cart <span />
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-6 meat vegitarian"
            style={{ position: "absolute", left: 759, top: 0 }}
          >
            <div className="pd-item">
              <div className="pd-thumbnail">
                <img
                  src="assets/images/resources/blg3.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <h3 className="semi-bold text-capitalize">
                <a href="#" title="">
                  T-Bone Steaks
                </a>{" "}
              </h3>
              <p>Few things are better than a properly grilled steak.</p>
              <strong className="semi-bold">$18.99</strong>
              <a
                href="/cart"
                title=""
                className="btn-default gradient-bg half-radius height-2"
              >
                Add to cart <span />
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-6 meat sushi"
            style={{ position: "absolute", left: 0, top: 591 }}
          >
            <div className="pd-item">
              <div className="pd-thumbnail">
                <img
                  src="assets/images/resources/blg4.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <h3 className="semi-bold text-capitalize">
                <a href="#" title="">
                  Strip Steaks
                </a>{" "}
              </h3>
              <p>Few things are better than a properly grilled steak.</p>
              <strong className="semi-bold">$16.89</strong>
              <a
                href="/cart"
                title=""
                className="btn-default gradient-bg half-radius height-2"
              >
                Add to cart <span />
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-6 meat sushi fastfood"
            style={{ position: "absolute", left: 379, top: 591 }}
          >
            <div className="pd-item">
              <div className="pd-thumbnail">
                <img
                  src="assets/images/resources/blg5.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <h3 className="semi-bold text-capitalize">
                <a href="#" title="">
                  Rib-eye Steaks
                </a>{" "}
              </h3>
              <p>Few things are better than a properly grilled steak.</p>
              <strong className="semi-bold">$15.69</strong>
              <a
                href="/cart"
                title=""
                className="btn-default gradient-bg half-radius height-2"
              >
                Add to cart <span />
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-6 meat vegitarian fastfood"
            style={{ position: "absolute", left: 759, top: 591 }}
          >
            <div className="pd-item">
              <div className="pd-thumbnail">
                <img
                  src="assets/images/resources/blg6.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
              <h3 className="semi-bold text-capitalize">
                <a href="#" title="">
                  Top Sirloin Steaks
                </a>{" "}
              </h3>
              <p>Few things are better than a properly grilled steak.</p>
              <strong className="semi-bold">$25.39</strong>
              <a
                href="/cart"
                title=""
                className="btn-default gradient-bg half-radius height-2"
              >
                Add to cart <span />
              </a>
            </div>
          </div>
        </div>
        {/*masonary end*/}
      </div>
    </div>
    {/*popular-dishes end*/}
  </div>
</section>


<section className="sec-block">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="feedback-section">
          <h2>Feedbacks (3)</h2>
          <div className="testimonials-list">
            <div className="test-monial">
              <div className="testi_head">
                <ul>
                  <li>
                    <img src="assets/images/resources/auth1.jpg" alt="" />
                    <span>Carlos Bolitti</span>
                  </li>
                  <li>May 18, 2020</li>
                  <li>
                    <ul className="rating">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <p>
                Very cool team. They work quickly and smoothly. They delivered
                food on time, the dishes were still hot and the drinks were
                cold. Good service I will recommend it to everyone.
              </p>
            </div>
            {/*test-monial end*/}
            <div className="test-monial">
              <div className="testi_head">
                <ul>
                  <li>
                    <img src="assets/images/resources/auth1.jpg" alt="" />
                    <span>Lili Martin</span>
                  </li>
                  <li>May 14, 2020</li>
                  <li>
                    <ul className="rating">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <p>
                I ordered food from two different restaurants at the same time
                which are far from each other but the guys did very well and
                delivered the food on time hot and fresh. Everything was as
                tasty and beautiful as in the restaurant. Food has not lost its
                beautiful appearance.
              </p>
            </div>
            {/*test-monial end*/}
            <div className="test-monial">
              <div className="testi_head">
                <ul>
                  <li>
                    <img src="assets/images/resources/auth1.jpg" alt="" />
                    <span>Manuel Bonturini</span>
                  </li>
                  <li>May 13, 2020</li>
                  <li>
                    <ul className="rating">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <p>
                Very cool team. They work quickly and smoothly. They delivered
                food on time, the dishes were still hot and the drinks were
                cold. Good service I will recommend it to everyone.
              </p>
            </div>
            {/*test-monial end*/}
          </div>
        </div>
        {/*feedback section end*/}
      </div>
      <div className="col-lg-4">
        <div className="sidebar">
          <div className="widget widget-review">
            <h3 className="widget-title">Leave a review</h3>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="half-radius"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="half-radius"
              />
              <textarea
                name="review"
                placeholder="Write a review"
                defaultValue={""}
              />
              <ul className="rating d-block">
                <li>
                  <i className="far fa-star" />
                </li>
                <li>
                  <i className="far fa-star" />
                </li>
                <li>
                  <i className="far fa-star" />
                </li>
                <li>
                  <i className="far fa-star" />
                </li>
                <li>
                  <i className="far fa-star" />
                </li>
              </ul>
              <button type="submit" className="btn-default half-radius">
                Submit <span />
              </button>
            </form>
          </div>
          {/*widget-review end*/}
        </div>
        {/*sidebar end*/}
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Manue
