
// import './App.css'
// import Cow from './cow'
// import './cow.css'

// import Greeter from './Greeter'
// import Die from './Die'
import ListPicker from "../ListPicker"


function App() {


  return (
    <>
      {/* <Greeter person='Asim' from='Denton' />
      <Greeter person='Nick' from='Asim' /> */}

      <ListPicker values={['Asim', 'Nick', 'Bish']} />

    </>
  )
}

export default App
