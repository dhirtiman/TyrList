import './App.css'
import Header from './components/Header.tsx' 
import TierChart from './components/TierChart.tsx'

function App(): JSX.Element {
    return (
      <div>
        <Header />
        <TierChart />
      </div>
    )
}

export default App 