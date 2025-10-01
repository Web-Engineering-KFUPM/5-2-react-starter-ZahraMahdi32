import './App.css'
import StudentCard from 'src/components/StudentCard.jsx'   
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
         <StudentCard name="" id="" dept="" />
         <StudentCard name="" id="" dept="" />
        </div>
      </main>
    </div>
  )
}

export default App
