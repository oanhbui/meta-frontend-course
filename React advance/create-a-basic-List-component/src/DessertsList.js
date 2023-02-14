
function DessertsList(props) {
    // Implement the component here.
    const data = props.data;
    const sortedList = data.filter(dessert => dessert.calories <= 500).sort((a, b) => a.calories - b.calories);
    const dessertList = sortedList.map((dessert, index) => <li key={index}>{dessert.name} - {dessert.calories} cal</li>)
    return (
      < ul >
        {dessertList}
      </ul >
    );
  }
  
  export default DessertsList;
  