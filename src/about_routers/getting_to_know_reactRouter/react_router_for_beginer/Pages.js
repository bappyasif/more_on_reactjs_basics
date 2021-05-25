import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h4>About Page</h4>
    </div>
  );
}

export function Shop() {
  let [items, setItems] = useState([]);

  useEffect(() => fetchingItems(), []);
  let fetchingItems = () => {
    let url = "https://fortnite-api.theapinetwork.com/upcoming/get";
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => {
        // console.log(jsonRes.data);
        setItems(jsonRes.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>Shop Page</h4>
      {/* {items.map((item, idx)=> idx < 11 ? <div key={item.itemID}>{item.item.name}</div> : false)} */}
      {/* {console.log(items,"??")} */}
      {/* {items.map((item, idx)=> <div key={item.item.name}>{item.item.name}</div>)} */}
      {/* {items.map((item, idx)=> idx < 11 ? <div key={item.itemId}><Link to={item.itemId}>{item.item.name}</Link></div> : false)} */}
      {items.map((item, idx) =>
        idx < 11 ? (
          <div key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
          </div>
        ) : (
          false
        )
      )}
    </div>
  );
}

export function Item(match) {
  let [item, setItem] = useState({});

  // useEffect(() => fetchingItem(), []);
  useEffect(() => fetchingItem(), [match.match.params.prodId]);

  let fetchingItem = () => {
      // console.log("matching:", match);
    let url = `https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.prodId}`;
    // fetch(url).then(data=>console.log(data, data.json()));
    fetch(url).then(res=>res.json()).then(data=>{
      // console.log(data);
      setItem(data.data);
      // console.log(item)
    });
  };

  let displayelements;
  if(item.hasOwnProperty('itemId')) {
    displayelements = <div>
      <div>{item.item.description}</div>
      <img src={item.item.images.background} width='200px' height='200px' />
      </div>
  }

  return (
    <div>
      <h4>Product Page</h4>
      {/* {console.log(item,"!!", item.hasOwnProperty('itemId'))} */}
      {/* <img src={item.data.item.images.background} /> */}
      {item.hasOwnProperty('itemId') ? item.item.name : false}
      {displayelements}
    </div>
  );
}

export function Nav() {
  return (
    <nav className="routeNav">
      <h4>Navigation Page</h4>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        {/* <Link to="/shop:prodId">
          <li>Product Detail</li>
        </Link> */}
      </ul>
    </nav>
  );
}

// export function Nav() {
//   return (
//     <nav className="routeNav">
//       <h4>Navigation Page</h4>
//       <ul className="nav-links">
//         <li>About</li>
//         <li>Shop</li>
//       </ul>
//     </nav>
//   );
// }
