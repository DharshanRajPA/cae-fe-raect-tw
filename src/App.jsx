import { useEffect } from 'react';
import './App.css';
import { Button } from './components/Button.jsx';
import { Card } from './components/Card.jsx';
import { AlertBell } from './components/Icons/AlertBell.jsx';
import { DashboardBell } from './components/Icons/DashboardBell.jsx';
import { LinkedIn } from './components/Icons/LinkedIn.jsx';
import { Notes } from './components/Icons/Notes.jsx';
import { NotesCard } from './components/NotesCard.jsx';
import { ProfileCard } from './components/ProfileCard.jsx';
import { Tags } from './components/Tags.jsx';
function App() {


  useEffect(() => {
    function handleMessage(event) {
      if (event.data.type === 'PROFILE_DATA') {
        console.log("Received profile data:", event.data.payload);
        const ProfileName = document.getElementById('profile-name');
        const ProfilePicture = document.getElementById('profile-picture');
        const ProfileDescription = document.getElementById('profile-description');
        if (ProfileName) ProfileName.innerHTML = event.data.payload.Name;
        if (ProfilePicture) ProfilePicture.src = event.data.payload.ProfilePicture;
        if (ProfileDescription) ProfileDescription.innerHTML = event.data.payload.Description;
      }
    }

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);


  return (
    <>
      <Card>
        <div id="topic" className='flex justify-between items-center'>
          <div className='flex justify-start items-center'>
            <div className='top-[5685px] left-[8965px] items-center'>
              <AlertBell></AlertBell>
            </div>
            <div>
              <p className='w-[125px]  left-[8995px] text-black font-medium text-base items-center'>Social Stalker</p>
            </div>
          </div>
          <div>
            <DashboardBell className='pb-[5px]'></DashboardBell>
          </div>
        </div>
        <ProfileCard id="about">
          <div id="info" className="flex justify-start ">
            <div>
              <img id="profile-picture" class="w-[50px] h-[50px] top-[5739px] left-[8966px] rounded-full border-[1.5px] border-solid border-violet-800" alt="" src="https://picsum.photos/200/300" />
            </div>
            <div className='w-[185px] h-[55px] pl-[4px]'>
              <h1 id="profile-name" className='h-[20px] mb-[3px] text-black font-semibold text-lg'>Person Name</h1>
              <p id="profile-description" className='two-lines-truncate h-[28x] text-black font-semibold text-gray-700 text-[10px]'>This is the Description Section About The Person Details And Description ...</p>
            </div>
            <div>
              <LinkedIn></LinkedIn>
            </div>
          </div>
          <div id="tags" className="p-[5px] pt-[8px] flex justify-between" >
            <Tags>Customers</Tags>
            <Tags>Enterprise</Tags>
            <Tags>+ Add Me</Tags>
          </div>
          <NotesCard id="notes">
            <div className='flex justify-start items-center'>
              <div className='pt-[4px]'>
                <Notes></Notes>
              </div>
              <div>
                <p className='pl-[4px] text-black font-medium text-sm items-center'>Notes</p>
              </div>
            </div>
            <div>
              <textarea
                className=" notes-textarea w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Type Your Notes Here.."
              ></textarea>
            </div>
            <div className='flex justify-center items-center'>
              <div>
                <Button>Save</Button>
              </div>
            </div>
          </NotesCard>
        </ProfileCard >
      </Card >
    </>
  )
}

export default App
