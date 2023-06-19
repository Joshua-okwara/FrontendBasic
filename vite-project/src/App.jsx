import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);
  const [toggle, setToogle] = useState(false);

  const getAlldata = () => {
    const url = "https://free-food-menus-api-production.up.railway.app/burgers";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setItems(res));
    console.log(items);
  };

  // const getItemData = (id) => {
  //   const url2 = `https://free-food-menus-api-production.up.railway.app/burgers/${id}`;

  //   fetch(url2)
  //     .then((res) => res.json())
  //     .then((res) => setItemInfo([res]));
  // };

  // function ShowPop(id) {
  //   setToogle(!toggle);
  //   getItemData(id);
  //   console.log(id);
  // }

  useEffect(() => {
    getAlldata();
    // getItemData();
    // ShowPop();
  }, []);

  return (
    <>
      <main>
        <section className="Main">
          <header>
            <div className="Logo">
              <img src="./src/assets/logo.png" alt="" />
            </div>
            <nav>
              <ul>
                <li>Home</li>
                <li>Hot Item</li>
                <li>Menus</li>
                <li>Contact Us</li>
              </ul>
            </nav>
            <div className="Add">
              <div className="SignUp">
                <img src="./src/assets/sign.png" alt="" />
              </div>
              <button className="Signup">SIGN UP</button>
            </div>
          </header>
          <section className="Sec">
            <article className="PageDes">
              <div className="PagesDesDiv">
                <h1>
                  <span>Welcome</span> to <br /> The world of <br /> Tasty and
                  Fresh Food.
                </h1>
                <p>
                  Keep it easy with these simple but delicious recipes <br />
                  from made-ahead lunches and mid-week meals to <br /> fuss-free
                  sides.
                </p>
                <article>
                  <span className="SearchHolder">
                    <div className="DivInput">
                      <div className="SearchLogo">
                        <img src="./src/assets/search.png" alt="" />
                      </div>
                      <input type="text" placeholder="Search Burger" />
                    </div>
                    <div className="Search">Search</div>
                  </span>
                </article>
              </div>
            </article>
            <article className="PageImg">
              <img src="./src/assets/burg.png" alt="" />
            </article>
          </section>
          <section className="FoodHolder">
            {items?.map((e) => (
              <div className="Card">
                <article className="FoodImage">
                  <img src={e.img} alt="" />
                </article>
                <article className="Details">
                  <h1 className="Name">{e.name}</h1>
                  <h2 className="Price">&#8358; {e.price}</h2>
                  <div className="CardBtn">
                    <button className="Btn1">VIEW CART</button>
                  </div>
                </article>
              </div>
            ))}
          </section>
        </section>
        {/* <section className="Popup">
          <article className="PopCard">
            <div className="PopImage">
              <img src="" alt="" />
            </div>
            <div className="ViewDetails">
              <article className="Wrapper">
                <h1 className="Name1"> name</h1>
                <p>dsc</p>
                <h2 className="Price">&#8358; price</h2>
                <h2>country</h2>
                <button className="Btn">ADD TO CART</button>
              </article>
            </div>
          </article>
        </section> */}
      </main>
    </>
  );
}

export default App;
