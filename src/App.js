import ItemList from './components/item';

const App = ()=> {
  return (
   <>
    <h1>Hello World</h1>
    <ul>
      <ItemList>Item 1</ItemList>
      <ItemList>Item 2</ItemList>
      <ItemList>Item 3</ItemList>
    </ul>
   </>
  )
};

export default App;