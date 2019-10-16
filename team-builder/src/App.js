import React, {useState} from 'react';
import ReactDom from 'react-dom';
import './App.css';
import MemberForm from './MemberForm';
import Members from './Members';
import data from './Data';

function App() {
  const [teamList, setTeamList] = useState(data);

  const addNewMembers = member => {
    setTeamList([...teamList, member]);
  }
  return (
    <div className="App">
        <h1>My Team</h1>
        <MemberForm addNewMembers={addNewMembers} />
        <Members teamList={teamList} />
    </div>
  );
}

export default App;
