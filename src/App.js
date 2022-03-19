import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Laptop', price: 50000 },
    { name: 'I-Phone', price: 90000 },
    { name: 'Samsung', price: 40000 },
    { name: 'MI', price: 20000 },
  ]
  return (
    <div className="App">
      {products.map(product => <Product name={product.name} price={product.price}></Product>)}
      <Product name="I-phone" price="100000"></Product>
      <Product name="Samsung" price="90000"></Product>
    </div>
  );
}
function Product(props) {
  return (
    <div className="product">
      <h3>Name:{props.name}</h3>
      <h4>Price:{props.price}</h4>
    </div>
  )
}
export default App;
