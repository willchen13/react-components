
var onListItemClick = (event) => {
    console.log('i got clicked');
}

// var GroceryList = (props) => (
//     <ul>
//         <li onClick={onListItemClick}>{props.groceries[0]}</li>
//         <li>{props.groceries[1]}</li>
//         <li>{props.groceries[2]}</li>
//     </ul>
// );



class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false,
            hover: false
        };
    }
    
    onGroceryItemClick(){
        this.setState({
            done: !this.state.done
        });
    }
    
    onGroceryItemHover() {
        this.setState({
            hover: !this.state.hover
        })
    }
    
    // onGroceryItemEnter() {
    //     this.setState({
    //         hover: true
    //     })
    // }

    // onGroceryItemExit() {
    //     this.setState({
    //         hover: false
    //     })
    // }

    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.hover ? 'bold' : 'normal'
          };
        
          // You can pass inline styles using React's `style` attribute to any component
          // snake-cased css properties become camelCased this this object
        return (
            //props is no longer passed in but accessed with this.props
            <li style = {style}
             onMouseEnter = {this.onGroceryItemHover.bind(this)}
             onMouseLeave = {this.onGroceryItemHover.bind(this)}
             onClick = {this.onGroceryItemClick.bind(this)}> {this.props.grocerie}</li>
        );
    }

}

var GroceryList = (props) => (
    <ul>
        {props.groceries.map(grocerie =>
            <GroceryListItem grocerie = {grocerie} key = {grocerie} />
        )}

    </ul>
);
    
var App = () => (
    <div> 
        <h2> My Grocery List</h2>
        <GroceryList groceries = {['Cucumbers', 'Kale', 'Lettuce']}/>
    </div>
);
        
ReactDOM.render(<App />, document.getElementById('app'));