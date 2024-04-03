import './App.css'
import Card from './components/Card'
function App() {
  let obj = {
    nameObj: "john",
  }
  return (
    <>
    <h1 className='bg-purple-500 text-black p-4 rounded-xl'>Hello Tailwind</h1>
    <Card name="AirMax Pro"/>
    <Card name={obj.nameObj}/>
    </>
  )
}

export default App
