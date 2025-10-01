import './App.css'
import StudentCard from './components/StudentCard.jsx'   
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
         <h1>Student Info</h1>
         <StudentCard name="Zahra" id="202271780" dept="CS" />
         <StudentCard name="Fatima" id="202271790" dept="SWE" />
        </div>
      </main>
    </div>
  )
}

export default App