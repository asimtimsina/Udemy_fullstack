
// import './App.css'
// import Cow from './cow'
// import './cow.css'

// import Greeter from './Greeter'
// import Die from './Die'
// import ListPicker from "../ListPicker"
import DoubleDice from "./DoubleDice"
import Heading from "./Heading"
import ColorList from "./ColorList"
import Slots from "./Slots"
import ShoppingList from "./ShoppingList"



function App() {

  const lists = [
    { id: 1, name: 'Milk', quantity: 5, picked: true },
    { id: 2, name: 'Oats', quantity: 1, picked: false },
    { id: 3, name: 'Carrot', quantity: 4, picked: true },
    { id: 4, name: 'Broccoli', quantity: 2, picked: false },
  ]

  return (
    <>
      {/* /* <Heading color='teal' text='Hi Everyone' /> */}
      {/* <Greeter person='Asim' from='Denton' />
      <Greeter person='Nick' from='Asim' /> */}

      {/* <ListPicker values={['Asim', 'Nick', 'Bish']} /> */}

      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice />  */}
      {/* 
      <ColorList color={['Red', 'Green', 'Purple', 'Teal']} />
      <ColorList color={['Olive', 'Orangered', 'Red', 'Magenta']} /> */}

      <Slots />
      <ShoppingList lists={lists} />

    </>
  )
}

export default App
