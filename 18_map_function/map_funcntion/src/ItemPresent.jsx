import ListItem from "./ListItem";
function ItemPresent({items}){
 
 return <>
  {items.map((items) => (
      <ListItem  key={items} Fooditem={items}></ListItem>
      ))}</>
}
export default ItemPresent;