
// import './App.css'
// import Cow from './cow'
// import './cow.css'

import Greeter from './Greeter'
import Die from './Die'

function App() {


  return (
    <>
      {/* <Greeter person='Asim' from='Denton' />
      <Greeter person='Nick' from='Asim' /> */}

      <Die numSides={5} />
      <Die numSides={20} />
      <Die />

    </>
  )
}

export default App
