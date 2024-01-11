import style from "../components/Button.module.css"
const Button =()=>{

  let buttons = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

  return <>
  {buttons.map((items)=>(<button className={style.button}>{items}</button>))}
   

  </>
}
export default Button;