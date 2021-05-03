import React from "react";
import { JokeItem } from "./JokeItem";
import { jojkesData, jokesData } from "./jokesData";

// simply filtering jokes data
export function JokesContainer() {
    let jokes = jokesData.filter(joke => joke.question).map((joke) => (
      <JokeItem
        key={joke.id}
        question={joke.question}
        punchLine={joke.punchLine}
      />
    ));
    return <div className="jokes-container">{jokes}</div>;
  }


// without filtering jokes data
// export function JokesContainer() {
//   let jokes = jokesData.map((joke) => (
//     <JokeItem
//       key={joke.id}
//       question={joke.question}
//       punchLine={joke.punchLine}
//     />
//   ));
//   return <div className="jokes-container">{jokes}</div>;
// }

// directly passing down props
// export function JokesContainer() {
//   return (
//     <div className="jokes-container">
//       <JokeItem
//         question="What's best thing about Switzerland?"
//         punchLine="i don't know, but their Flag is a big plus!!"
//       />
//       <JokeItem
//         question="Did you hear about mathmaticians who's afraid of negative numbers?"
//         punchLine="they'll stop at nothing to avoid them"
//       />
//       <JokeItem
//         question="Did you hear about that new restaurant called Karma?"
//         punchLine="there's no menu: you get what you deserve"
//       />
//       <JokeItem punchLine="nothings sweeter than honey" />
//       <JokeItem
//         question="Did you hear about that claustrophobic astronaut"
//         punchLine="Xe just needed a little space"
//       />
//     </div>
//   );
// }

// export function JokesContainer() {
//     return (
//         <div className="jokes-container">
//             <JokeItem question="What do you call a nutbag?" punchLine="sophists" />
//             <JokeItem question="What do you call a hotmess?" punchLine="sophists" />
//             <JokeItem question="What do you call a shittshow?" punchLine="sophists" />
//             {/* <JokeItem punchLine="sophists" /> */}
//             <JokeItem question="What do you call a mockery?" punchLine="sophists" />
//         </div>
//     )
// }
