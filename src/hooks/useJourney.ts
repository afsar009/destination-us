import { useNavigate } from 'react-router-dom'; export function useJourney(){const navigate=useNavigate(); return (path:string)=>navigate(path)}
