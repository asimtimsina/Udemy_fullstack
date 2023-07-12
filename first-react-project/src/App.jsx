
// import './App.css'
// import Cow from './cow'
// import './cow.css'

// import Greeter from './Greeter'
// import Die from './Die'
// import ListPicker from "../ListPicker"
import DoubleDice from "./DoubleDice"
import Heading from "./Heading"


function App() {


  return (
    <>
      <Heading color='teal' text='Hi Everyone' />
      {/* <Greeter person='Asim' from='Denton' />
      <Greeter person='Nick' from='Asim' /> */}

      {/* <ListPicker values={['Asim', 'Nick', 'Bish']} /> */}

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

    </>
  )
}

export default App
