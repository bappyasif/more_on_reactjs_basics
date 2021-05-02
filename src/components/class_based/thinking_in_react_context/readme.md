starting with a mock
consider that we have a JSON api and a mock from designers:
    <> Filterable Table
        <> search
        <> display of products by categories
        <> rows of products in each rows per catergories
        <> products in different color for filter affiliate product(e.g. out of stock products)
 and our JSON API returns some data that looks like this:
 [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


Step 01::
<> first thing we should do is to draw boxes around every component and subcomponent in mock and give them names, maybe talking to desginers would help in naming them
<> how do we know what should be its own component? we can answer that by using same techniques for deciding if we should create a new function or object or not, to simplyfy this process we can always rely on Single Responsibility Principal, a component should ideally do one thing and one thing only, if it ends up growing then we should consider to decompose into smaller subcomponents
<> often we displaying JSON data model to user, when model built correctly our UI will map nicely as well, that's because UI and data model tecnds to adhere same architecture, let's seperate UI into components, where each component matches pieces of our data model
    <> FilterableProductTableBox
    <> SearchBar
    <> ProductTable
    <> ProductCategory
    <> ProductRows
if we look closely, Product Table has Name and Price inate into it, which we could have been in seperate components as well, it's a metetr of preference really and when it becomes necessary such as bringing in other functionality suchg as sorting products we should definittely consider it to be as such, namely ProductTableHeaderComponent,
lets rearrage according to their heirarchy in our component tree
    <> FilterableProductsTable
        <> SearchBar
        <> ProductsTable
            <> ProductCategoryRow
            <> ProductRows

<> now that we have our component heirarchy, lets implement this app, easiest way to build a version that takes our data model and renders UI but no activity, it's best to decouple these processes
<> for static version we'll use props, because state is used for interactivity only, that is data changes over time
<> we can start building it bottom-up or top-down manner, usually top-down is way to go for simpler projects and bottom-up for larger projects and writing tests as we build
<> component at top level FilterableProductTable will take data model as a prop, which in turn passed into different re usuable components that renders this data model in each of them accordingly, react's a one-way data flow keeps everything modular fast, for static implementation we'll have to re render manulaly to see any changes is there in data model
<> when there is a need of client-server kind of processing requires, then we should alsways go for stateful components and all visualization and formatting logic should go into as many stateless components as possible for performance gains, and easer to maintain


<> Identifying minimal but complete representation of UI state
    <> to make our UI interactive we need to be able to trigger changes to our underlying data model, we can do this through use of 'state' and following DRY-Don't Repeat Yourself principle
    <> our current example has these pieces of data:
        <> original list of products
        <> search text user entered
        <> value of checkbox input
        <> filtered list of products
    lets go though each of them and ask these 3 questions about them:
        <> if it's passed from a parent via props? if it is, ir probably might not be a state
        <> does it remain unchanged over time? if it is then probably isn't a state
        <> can we compute it based on any other state or props in our component, if so then not a state
    <> original list of products passed in as props so tahts not state 
    <> search text and filterable checkbox seem to be state since they can change over time and can't be computed from anything
    <> filtered list of products isn't state either because it can be computed by combining original list of products and search text and value of checkbox input
    <> our state is:
        <> search text user enetered
        <> value of checkbox input


<> Identifying where our state variables should be in
    <> we've identified what minimal set of app statre is, now lets find out where they are being mutated, as in which component mutates or owns this state variables
    <> for each piece of state in our application: also it's also important to remember React is all about one-way data flow down to component heirarchy, but these steps will surely will help us how things should be:
        <> identify every component that renders sometyhing base on that state
        <> find a common owner component, a single commmon ancestor above all components that need state in component heirarchy
        <> either common owner or another component higher up in heirarchy tree should own state variable
        <> if we can't find a component where it makes sense to own state, create a new componbent solely for holding state and add it somewherein heirarchy abobe our denoted common owner component to achieve that
    <> when runnig these checkpoints against our example application, lets see what we get:
        <> ProductTable needs filter product list based on state and SearchBar needs to display search text and checked state
        <> common owner component is FilterableProductTable
        <> it conceptually make sense for filter text and checked value to live in FilterableProductTable
    <> now that we decided that FilterableProductTable is common component, lets define things to get those state variable going for rest of our app to use, {filterText: '', inStock: false}, namely to ProductTable and SearchBar as props, in their use these props to filter rows in ProductTable and set values of form fields in SearchBar
<> Adding Inverse Data Flow
    <> up until previous checkpoint, we built an app that renders corerctly as a function and state flowing down to compoennts hierarchy, lets support data flowing other way, as in Form Component in ProductTable needs to update state in FilterableProductTable
    <> react makes this data flow explicit to help us understand how our program works, and requires more than just little more typing than traditional two way data-binding
    <> so, what we want is that whenever user changes form, we update corresponding state to reflect user input, since components should only update their own state, and we'll pass callbacks to SearchBar that will trigger state should be updated in state owned component so that DOM rerender accordingly
        <> we can use onChange event on inputs to be notified of it, callcaks passed by FilterableProductTable weill call setSate() and app will be updated