function DessertsList(props) {
  const listItems = props.data
  .filter(dessert => dessert.calories < 500)
  .map(dessert => {
    const itemText = `${dessert.name} - ${dessert.calories}`
    return <li key={dessert.name}>{itemText}</li>
  })


  return (
    <ul>
      <li>{listItems}</li>
    </ul>
  )
}

export default DessertsList
