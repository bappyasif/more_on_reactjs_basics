import React from "react";
import { ContactCard } from "./ContactCard";


// with an object passdown
export function CardsContainer() {
    return (
      <div>
        <ContactCard
          contact={{
            name: "maggie magnamson",
            email: "maggie@catnap.meow",
            mobile: "(212) 555 1234",
            imgUrl: "https://picsum.photos/99",
          }}
        />
        <ContactCard
          contact={{
            name: "emily magnamson",
            email: "emily@catnap.meow",
            mobile: "(212) 555 1234",
            imgUrl: "https://loremflickr.com/99/99/paris,girl/all",
          }}
        />
        <ContactCard
          contact={{
            name: "whittney magnamson",
            email: "whittnet@catnap.meow",
            mobile: "(212) 555 1234",
            imgUrl: "http://placekitten.com/99/99",
          }}
        />
        <ContactCard
          contact={{
            name: "katie magnamson",
            email: "katie@catnap.meow",
            mobile: "(212) 555 1234",
            imgUrl: "https://placeimg.com/99/99/any",
          }}
        />
        
      </div>
    );
  }

// with exact props passdown
// export function CardsContainer() {
//   return (
//     <div>
//       <ContactCard
//         contact={{
//           name: "maggie magnamson",
//           email: "maggie@catnap.meow",
//           mobile: "(212) 555 1234",
//           imgUrl: "http://placekitten.com/99/99",
//         }}
//       />
//       {/* <ContactCard
//         name="maggie magnamson"
//         email="maggie@catnap.meow"
//         mobile="(212) 555 1234"
//         imgUrl="http://placekitten.com/99/99"
//       /> */}
//       <ContactCard
//         name="emily magnamson"
//         email="emily@catnap.meow"
//         mobile="(212) 555 1234"
//         imgUrl="http://placekitten.com/99/99"
//       />
//       <ContactCard
//         name="whittney magnamson"
//         email="whittney@catnap.meow"
//         mobile="(212) 555 1234"
//         imgUrl="http://placekitten.com/99/99"
//       />
//       <ContactCard
//         name="katty magnamson"
//         email="katty@catnap.meow"
//         mobile="(212) 555 1234"
//         imgUrl="http://placekitten.com/99/99"
//       />
//     </div>
//   );
// }
