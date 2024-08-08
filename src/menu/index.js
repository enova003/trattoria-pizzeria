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
            <h2 className="title">
              Appetizers<hr className="entity-line"></hr>
            </h2>
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
            <h2 className="title">
              Salads<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              <b>Trattoria House | small $7.99 | large $11.99</b>
              <br />
              Fresh hearts of romaine, tomatoes, onions, black olives, and
              cucumbers. Topped with our house blend of cheeses.
            </p>
            <p className="content">
              <b>Caesar | small $7.99 | large $11.99</b>
              <br />
              Fresh hearts of romaine, croutons, and housemade Caesar dressing,
              topped with parmesan cheese.
            </p>
            <p className="content">
              <b>Antipasto | $15.99</b>
              <br />
              Fresh hearts of romain, Italian meats, and Italian cheeses.
            </p>
            <p className="content">
              (Dressing: Ranch, Italian, Caesar, or Blue Cheese)
            </p>
            <h2 className="title">
              Sandwiches<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              <b>Philly Cheese Steak | $14.99</b>
              <br />
              Steak, onions, peppers, mushrooms, and white American cheese.
            </p>
            <p className="content">
              <b>Chicken Philly Cheese | $14.99</b>
              <br />
              Chicken, onions, peppers, mushrooms, and white American cheese.
            </p>
            <p className="content">
              <b>Italian Steak | $14.99</b>
              <br />
              Salami, steak, onions, peppers, and zesty Italian dressing.
            </p>
            <p className="content">
              <b>Italian | $14.99</b>
              <br />
              Salami, ham, pepperoni, and zesty Italian dressing.
            </p>
            <p className="content">
              <b>Meatball | $15.99</b>
              <br />
              Meatballs, marinara, and our house blend of cheeses.
            </p>
            <p className="content">
              <b>BTLC | $14.99</b>
              <br />
              Bacon, tomato, lettuce, cheese, and mayo.
            </p>
            <p className="content">
              (All sandwiches served with tortellini salad or chips.)
            </p>
            <h2 className="title">
              Desserts<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              <b>Tiramisu | $7.99</b>
              <br />
              Classic Italian, espresso dipped lady fingers, layered with
              whipped sweet mascarpone cheese; finished with cocoa powder.
            </p>
            <p className="content">
              <b>Peanut Butter Pie | $7.99</b>
              <br />
              Housemade creamy, delcious peanut butter pie.
            </p>
            <p className="content">
              <b>Cheesecake | $7.99</b>
              <br />A slic of white, rich, and creamy cheesecake.
            </p>
            <p className="content">
              <b>Key Lime Pie | $7.99</b>
              <br />
              Please ask about this seasonal item.
            </p>
            <p className="content">
              <b>Dessert Ballz | $7.99</b>
              <br />
              Try them drunken for $8.99.
            </p>
            <h2 className="title">
              Kid's Menu<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              <b>Pizza | $9.99</b>
              <br />
              Cheese, pepperoni, or white cheese (garlic, olive oil, and dried
              basil).
            </p>
            <p className="content">
              <b>Spaghetti & Meatballs | $7.99</b>
              <br />
            </p>
            <p className="content">
              <b>Alfredo Pasta | $6.99</b>
              <br />
              Add chicken for $2.00.
            </p>
            <p className="content">
              <b>Cheese Ravioli | $7.99</b>
              <br />
            </p>
            <h2 className="title">
              Soft Drinks<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              Coke, Diet Coke, Coke Zero, Sprite, Barq's Root Beer, Dr. Pepper,
              Sweet Tea, Unsweet Tea, Pink Lemonade.
            </p>
          </div>
          <div className="right-column">
            <h2 className="title">
              Entrees<hr className="entity-line"></hr>
            </h2>
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
            <p className="content">(Side salad or soup | $2.99)</p>
            <h2 className="title">
              Additions<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              <b>Meatballs | $4.99</b> <br /> <br />
              <b>Italian Sausage | $4.99</b> <br /> <br />
              <b>Chicken | $5.99</b> <br /> <br />
              <b>Tuna | $8.99</b>
            </p>
            <h2 className="title">
              Housemade Soup of the Day<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              <b>Cup | $4.99</b> <br /> <br />
              <b>Bowl | $7.99</b>
            </p>
            <h2 className="title">
              Calzones<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              <b>Italian | medium $17.99 | large $22.99</b>
              <br />
              Salami, ham, pepperoni, housemade marinara, and our house blend of
              cheeses.
              <br /> <br />
              <b>Build Your Own | medium $17.99 | large $22.99</b>
              <br />
              Include up to four fillings.
            </p>
            <h2 className="title">
              Pizza<hr className="entity-line"></hr>
            </h2>
            <p className="content">
              <h3>Classics</h3> <br />{" "}
              <b>Small $9.99 | Medium $15.99 | Large $19.99</b> <br /> <br />
              <b>Cheese</b>
              <br />A simple, delicious pizza topped with our house blend of
              cheeses.
              <br /> <br /> <b>Pepperoni</b>
              <br />A simple, delcious pizza topped with pepperoni and our house
              blend of cheeses.
              <br /> <br /> <b>White Cheese</b>
              <br />
              Garlic, olive oil, and dried basil.
            </p>
            <p className="content">
              <h3>Specialty</h3> <br /> <b>Medium $19.99 | Large $24.99</b>{" "}
              <br /> <br />
              <b>The Bull</b>
              <br />
              Pepperoni, meatballs, sausage, bacon, and ham.
              <br /> <br /> <b>Margherita</b>
              <br />
              Garlic, olive oil, fresh basil, fresh mozzarella, and freshly
              sliced tomatoes.
              <br /> <br /> <b>Veggie</b>
              <br />
              Spinach, peppers, onions, mushrooms, black olives, and feta
              cheese.
              <br /> <br /> <b>Chicken Alfredo</b>
              <br />
              Chicken, onions, mushrooms, and our housemade alfredo sauce.
              <br /> <br /> <b>BBQ Chicken</b>
              <br />
              Chicken, onions, peppers, and tangy BBQ sauce.
              <br /> <br /> <b>Philly Steak</b>
              <br />
              Steak, onions, peppers, mushrooms, and our housemade alfredo
              sauce.
              <br /> <br /> <b>Buffalo Chicken Pizza</b>
              <br />
              Chicken, bacon, onions, and buffalo sauce.
              <br /> <br /> <b>Chicken Philly</b>
              <br />
              Chicken, onions, peppers, mushrooms, and our housemade alfredo
              sauce.
              <br /> <br /> <b>Tratt Hot</b>
              <br />
              Pepperoni, fiery Italian seasoning, chopped garlic, and parsley,
              topped with our house blend of cheeses and crunchy seasoned bread
              crumbs.
            </p>
            <p className="content">
              <h3>The Trattoria</h3> <br /> <b>Medium $19.99 | Large $24.99</b>{" "}
              <br /> <br />
              Pepperoni, sausage, bacon, ham, onions, bell peppers, black
              olives, mushrooms, and feta cheese.
            </p>
            <p className="content">
              <h3>Build Your Own</h3> <br />{" "}
              <b>Meat Items $2.99 | Vegetable Items $1.99</b> <br /> <br />
              Pepperoni, sausage, bacon, ham, chicken, meatballs, salami,
              garlic, onions, mushrooms, anchovies, feta, bell peppers, black
              olives, green olives, ricotta cheese, spinach, artichoke hearts,
              jalapeño, banana peppers, pineapple.
            </p>
            <p className="content">
              <b>*</b> Consuming raw or uncooked food may increase your risk of
              foodborne illness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
