import React from "react";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Chair gray",
          img: "Chair-gray.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "chairs",
          price: '13.56',
        },
        {
          id: 2,
          title: "Table green",
          img: "Table-green.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "tables",
          price: '22.50',
        },
        {
          id: 3,
          title: "Cupboard",
          img: "Cupboard.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "cupboards",
          price: '54.10',
        },
        {
          id: 4,
          title: "Red bed",
          img: "Red-bed.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "beds",
          price: '101.99',
        },
        {
          id: 41,
          title: "Blue bed",
          img: "blue_bed.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "beds",
          price: '101.99',
        },
        {
          id: 21,
          title: "Table brown",
          img: "brown_table.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "tables",
          price: '22.50',
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this); 
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} /> }
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return;
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })

    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
