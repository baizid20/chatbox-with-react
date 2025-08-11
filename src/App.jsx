import Heading from './components/Heading'
import Search from './components/Search'
import Navbar from './components/Navbar'
import MessageBox from './components/messageBox'

function App() {

  return (
    <>
     <div className='border-2 w-1/2 py-5 mx-auto rounded-xl'>
       <Heading></Heading>
      <Search></Search>
      <Navbar></Navbar>
      <MessageBox></MessageBox>
     </div>
    </>
  )
}

export default App
