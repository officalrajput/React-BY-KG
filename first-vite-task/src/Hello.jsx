function Hello()
{
  let name = 'ranu';
  let FullName = () => {
 return 'ranu rajput';
  }
  return <>
  <h1>heloo my name is {name}</h1>
  <h2>my full name is {FullName()}</h2>
  </>
}

export default Hello;