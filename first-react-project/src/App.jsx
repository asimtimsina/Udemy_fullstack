
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
import PropertyList from "./PropertyList"



function App() {

  const lists = [
    { id: 1, name: 'Milk', quantity: 5, picked: true },
    { id: 2, name: 'Oats', quantity: 1, picked: false },
    { id: 3, name: 'Carrot', quantity: 4, picked: true },
    { id: 4, name: 'Broccoli', quantity: 2, picked: false },
  ]

  const properties = [
    { id: 123100, name: 'Desert Yurt', rating: 4.9, price: 150 },
    { id: 123101, name: 'Lust Mountain', rating: 4.8, price: 125 },
    { id: 123102, name: 'OceanView Condo', rating: 4.1, price: 320 },
    { id: 123103, name: 'Gold Miner Campground', rating: 4.5, price: 250 },
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

      {/* <Slots />
      <ShoppingList lists={lists} /> */}

      <PropertyList property={properties} />

    </>
  )
}

export default App
