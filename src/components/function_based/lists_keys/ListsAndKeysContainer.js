import React from "react";
import { Blog } from "./Blog";
import { ListItem } from "./ListItem";
import { ListItemVersionTwo } from "./ListItemVersionTwo";

export function ListsAndKeysContainer() {
  let numbers = [1, 2, 3, 4];

  let posts = [
    { id: 1, title: "hello react", content: "hello world of react" },
    { id: 2, title: "learning react", content: "have fun learning react" },
  ];

  // this listItems will show an warning in console saying list items should be hving a key attribute in them
  // let listItems = numbers.map((num) => <li>{num}</li>);

  // lets assign as key for list items in array
  let listItems = numbers.map((num) => <li key={num.toString()}>{num}</li>);

  // keys can help react to identify which item has changed, added, or removed.
  // keys should be given to elements inside any array, to give those rendered elements a stable identity, which should be unique thoughout DOM for them
  // best way to pick a key is to use a string that is uniquely identifies them, most likely is is a ID from procured data
  // when ID is not available using Index as keys can also be regarded as last resort, though it's behavior can get wonky at times for scenarios when dynmically adding/removing items happens
  let listingItems = numbers.map((value) => (
    <ListItem key={value.toString()} value={value} />
  ));

  /* keys serve as a hint to React but they dont get passed to components, if needed same value then we'll have pass it explicitly */
  /**
   let contents = posts.map((post) => (
    <Post key={post.id} id={post.id} title={post.title} />
  ));
   */
  // with that above code Post component can read id, and title but not 'key'

  return (
    <div>
      <p>using lists and keys</p>
      {/* componment rendering multiple elements */}
      {/* we can build collection of elements and include them into JSX using curly braces */}
      {listItems}
      <ul>{listingItems}</ul>

      {/* keys must be only unique among their siblings */}
      <Blog post={posts} />

      {/* we can separately declare listItems in a different component along with maps and use returned JSX in here */}
      <ListItemVersionTwo numbers={numbers} />

      {/* we can also embed any expresion in JSX as well, so we could inline use of map() */}
      {numbers.map((num) => (
        <ListItem key={num.toString()} value={num} />
      ))}
      {/* again a reminder, if map method getrs too nested then consider using a separate components for it */}
    </div>
  );
}
