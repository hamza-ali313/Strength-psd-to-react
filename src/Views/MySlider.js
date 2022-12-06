import React from "react";
import Slider from "react-slick";
import avatar from "../images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
const MySlider = (props) => {
  const settings = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    dots:true,
    centerMode:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="client-review">
      <Slider {...settings}>
        <div class="slider-card">
          <div class="upper">
            <img src={avatar} class="avatar" />
            <div class="rating-sec">
              <p>Ammi Welton</p>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
            </div>
          </div>
          <div class="lower">
            Laudantium illo quas soluta totam aut modi atque, quos esse sed
            temporibus placeat tempore quo quisquam earum iusto facere.
            <a href="#">READ MORE</a>
          </div>
        </div>

        <div class="slider-card">
          <div class="upper">
            <img src={avatar} class="avatar" />
            <div class="rating-sec">
              <p>Ammi Welton</p>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
            </div>
          </div>
          <div class="lower">
            Laudantium illo quas soluta totam aut modi atque, quos esse sed
            temporibus placeat tempore quo quisquam earum iusto facere.
            <a href="#">READ MORE</a>
          </div>
        </div>
        <div class="slider-card">
          <div class="upper">
            <img src={avatar} class="avatar" />
            <div class="rating-sec">
              <p>Ammi Welton</p>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
            </div>
          </div>
          <div class="lower">
            Laudantium illo quas soluta totam aut modi atque, quos esse sed
            temporibus placeat tempore quo quisquam earum iusto facere.
            <a href="#">READ MORE</a>
          </div>
        </div>
        <div class="slider-card">
          <div class="upper">
            <img src={avatar} class="avatar" />
            <div class="rating-sec">
              <p>Ammi Welton</p>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
            </div>
          </div>
          <div class="lower">
            Laudantium illo quas soluta totam aut modi atque, quos esse sed
            temporibus placeat tempore quo quisquam earum iusto facere.
            <a href="#">READ MORE</a>
          </div>
        </div>
        <div class="slider-card">
          <div class="upper">
            <img src={avatar} class="avatar" />
            <div class="rating-sec">
              <p>Ammi Welton</p>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
            </div>
          </div>
          <div class="lower">
            Laudantium illo quas soluta totam aut modi atque, quos esse sed
            temporibus placeat tempore quo quisquam earum iusto facere.
            <a href="#">READ MORE</a>
          </div>
        </div>
        <div class="slider-card">
          <div class="upper">
            <img src={avatar} class="avatar" />
            <div class="rating-sec">
              <p>Ammi Welton</p>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("star")} />
              </Link>
            </div>
          </div>
          <div class="lower">
            Laudantium illo quas soluta totam aut modi atque, quos esse sed
            temporibus placeat tempore quo quisquam earum iusto facere.
            <a href="#">READ MORE</a>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default MySlider;
