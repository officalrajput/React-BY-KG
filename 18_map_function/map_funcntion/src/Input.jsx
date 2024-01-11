import style from "./input.module.css"
function Input({handleKeyChange}){
  return <>
   <input className={style.textChange} type="text"  placeholder="Enter the new sabji or whatever you want"
   onKeyDown={handleKeyChange}/>
  </>
}
export default Input;