import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SelectService from './pages/SelectService'
import Consultation from './pages/Consultations'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-service" element={<SelectService/>} />
        <Route path="/pharmacy" element={<Dashboard />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </div>
  )
}