import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CatagorySliceAction } from "../store/catagorySlice";

const Header = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState("");
  const [homeActive, setHomeActive] = useState("active");
  const [active, setActive] = useState("");

  const handleCollaps = () => {
    setShow("show");
    setActive("active");
    if (homeActive === "active") {
      setHomeActive("");
    }
  };
  const handleRemoveCollaps = () => {
    setShow("");
    if (homeActive === "") {
      setActive("active");
    }
  };

  const handleCat = (info) => {
    sessionStorage.setItem("catagory", JSON.stringify(info));
    dispatch(CatagorySliceAction.getCat(info));
    if (info) {
      setHomeActive("");
      setActive("active");
    }
  };
  const handleHome = () => {
    setActive("");
    setHomeActive("active");
  };
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${homeActive}`}
              aria-current="page"
              onClick={handleHome}
            >
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={handleCollaps}
            onClick={handleRemoveCollaps}
          >
            <button
              class={`nav-link btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed ${active}`}
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              Catagory
            </button>
            <div class={`collapse ${show}`} id="home-collapse" style={{}}>
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link
                    to="/catagory"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded catagoryFood"
                    onClick={() => handleCat("Chicken")}
                  >
                    Chicken
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catagory"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded catagoryFood"
                    onClick={() => handleCat("Dessert")}
                  >
                    Dessert
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catagory"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded catagoryFood"
                    onClick={() => handleCat("Pasta")}
                  >
                    Pasta
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catagory"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded catagoryFood"
                    onClick={() => handleCat("Seafood")}
                  >
                    Seafood
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catagory"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded catagoryFood"
                    onClick={() => handleCat("Vegetarian")}
                  >
                    Vegetarian
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catagory"
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded catagoryFood"
                    onClick={() => handleCat("Breakfast")}
                  >
                    Breakfast
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
