import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import PopularSignMenu from "./PopularSignMenu";


const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category == "popular");
        setMenu(popularMenu);
      });
  }, []);

  return (
    <section className="popular-menu-section-wrrapper section-padding bg-[#f9f9f9]">
      <div className="container">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        />
        <div className="popular-menu-wrapper">
          <div className="popular-menu-row grid grid-cols-2 items-center justify-center gap-4">
            {menu.map((menuItem) => (
              <PopularSignMenu key={menuItem._id} menuItem={menuItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
