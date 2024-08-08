import React from "react";
import "./index.css";

function Menu() {
  return (
    <div>
      <div className="menu-banner">
        <img className="banner" src="./images/banner2.jpg" alt="banner" />
      </div>
      <div className="menu-content">
        <h1 className="title">Menu</h1>
        <hr className="line"></hr>
        <div className="menu">
          <div className="left-column">
            <h2 className="title">Appetizers</h2>
            <p className="content">
              <b>Garlic Ballz (World Famous) | $7.99</b>
              <br />
              Freshly baked ballz drizzled with garlic butter, topped with
              parmesan. Served with our homemade marinara (You will be hooked).
            </p>
            <p className="content">
              <b>Trattoria Starter | $6.99</b>
              <br />
              Our house baked crostini served with olive oil and spices for
              dipping.
            </p>
            <p className="content">
              <b>Bruschetta | $8.99</b>
              <br />
              Fresh, diced tomatoes, garlic, basil olive oil. Served on our
              housemade crostini.
            </p>
            <p className="content">
              <b>Soft Bread Sticks | $9.99</b>
              <br />
              Our bread sticks baked fresh to order. Served with parmesan and a
              side of housemade marinara or alfredo.
            </p>
            <p className="content">
              <b>Insalata Caprese | $9.99</b>
              <br />
              Fresh tomatoes, fresh basil, and mozzarella on housemade crostini.
              Garnished with a sweet balsamic reduction.
            </p>
            <p className="content">
              <b>Baked Cheesy Bread | $8.99</b>
              <br />
              Our freshly baked bread smothered with cheese. Served with a side
              of marinara.
            </p>
            <p className="content">
              <b>Trattoria Meatball Bake | $10.99</b>
              <br />A half dozen delicious meatballs, topped with our housemade
              marinara and special Trattoria blend of cheeses; baked golden
              brown.
            </p>
            <p className="content">
              <b>Ahi* | $13.99</b>
              <br />
              Slices of seared, blackened ahi tuna. Served with house baked
              crostini and our balsamic reduction for dipping.
            </p>
            <p className="content">
              <b>Blackened Tuna Quesadilla* | $16.99</b>
              <br />
              Seared blackened tuna steak, onions, black olives and cheese.
              Served with a side of salsa.
            </p>
            <h2 className="title">Salads</h2>
            <p className="content">
              <b>Trattoria House | small $7.99 | large $11.99</b>
              <br />
              Fresh hearts of romaine, tomatoes, onions, black olives, and
              cucumbers. Topped with our house blend of cheeses.
            </p>
          </div>
          <div className="right-column">
            <h2 className="title">Entrees</h2>
            <p className="content">
              <b>Greg's Baked Ziti | $15.99</b>
              <br /> Ziti noodles topped with our housemade marinara and
              smothered with our house blend of cheeses. Baked golden brown with
              your choice of meatballs or italian sausage.
            </p>
            <p className="content">
              <b>Manicotti | $15.99</b>
              <br />
              Ricotta stuffed pasta topped with our housemade marinara and
              smothered with our house blend of cheeses. Baked golden brown with
              your choice of meatballs or italian sausage.
            </p>
            <p className="content">
              <b>Chicken Alfredo | $15.99</b>
              <br />
              Pan-seared chicken breast and ziti noodles in our housemade
              alfredo sauce.
            </p>
            <p className="content">
              <b>Spaghetti and Meatballs | $14.99</b>
              <br />
              Angel hair pasta with our housemade marinara; topped with
              meatballs and parmesan cheese.
            </p>
            <p className="content">
              <b>Shrimp & Garlic Ravioli | $16.99</b>
              <br />
              Ravioli filled with shrimp and roasted garlic. Topped with our
              housemade alfredo.
            </p>
            <p className="content">
              <b>Cheese Ravioli | $14.99</b>
              <br />
              Ravioli filled with italian cheeses, topped with housemade
              marinara and parmesan cheese.
            </p>
            <p className="content">
              <b>Four Cheese Beef Lasagna | $17.99</b>
              <br />A house favorite! Layers of pasta, beef, housemade marinara,
              and a delicious blend of 4 italian cheeses baked golden brown.
            </p>
            <h2 className="title">Additions</h2>
            <p className="content">
              <b>Meatballs | $4.99</b> <br /> <br />
              <b>Italian Sausage | $4.99</b> <br /> <br />
              <b>Chicken | $5.99</b> <br /> <br />
              <b>Tuna | $8.99</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
