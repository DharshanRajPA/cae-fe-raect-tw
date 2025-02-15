import './App.css'
import { Button } from './components/Button.jsx'
import { Card } from './components/Card.jsx'
import { AlertBell } from './components/Icons/AlertBell.jsx'
import { Dashboard } from './components/Icons/Dashboard.jsx'
import { Notes } from './components/Icons/Notes.jsx'
import { Profile } from './components/Profile.jsx'
import { Tags } from './components/Tags.jsx'
function App() {
  return (
    <>
      <Card>
        <div id="topic" className='flex justify-between items-center'>
          <div className='flex justify-start items-center'>
            <div>
              <AlertBell></AlertBell>
            </div>
            <div>
              <h1 className='text-5xl'>Social Stalker</h1>
            </div>
          </div>
          <div >
            <Dashboard></Dashboard>
          </div>
        </div>
        <Card id="about">
          <div id="info">
            <div className="flex justify-between items-center">
              <div className='flex justify-start'>
                <div>
                  <Profile></Profile>
                </div>
                <div>
                  <h1>VCUAVC</h1>
                  <span>UABSCUABCUSBCUABACASCASC</span>
                </div>
              </div>
              <div >
                <Dashboard></Dashboard>
              </div>
            </div>
          </div>
          <div id="tags" className="flex justify-between" >
            <Tags></Tags>
            <Tags></Tags>
            <Tags></Tags>
          </div>
          <Card id="notes">
            <div className='flex justify-start items-center'>
              <div>
                <Notes></Notes>
              </div>
              <div>
                <h1>Notes</h1>
              </div>
            </div>
            <div>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <div>
                <Button></Button>
              </div>
            </div>
          </Card>
        </Card>
      </Card>
    </>
  )
}

export default App
