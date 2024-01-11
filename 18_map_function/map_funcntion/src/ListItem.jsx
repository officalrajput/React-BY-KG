import css from "./ListItem.module.css"
function ListItem({Fooditem})
{
  return <>
   <li className={css["RR-div"]} key={Fooditem}><span className={css["RR-bg"]}>{Fooditem}</span>
    <button onClick={function(event){
      console.log(`${Fooditem}`);
      console.log(event.target);

    }} >BUY</button></li>
  </>
}
export default  ListItem;