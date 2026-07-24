import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
const Journey = lazy(() => import('./pages/Journey'));
function RoutedApp(){const location=useLocation();return <Suspense fallback={<div className="loading">Destination Us</div>}><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}>{['/','/intro','/question','/booking','/flight','/boarding-pass','/letter','/andaman'].map(path=><Route key={path} path={path} element={<Journey/>}/>)}<Route path="*" element={<Navigate to="/" replace/>}/></Routes></AnimatePresence></Suspense>}
export default function App(){return <MotionConfig reducedMotion="user"><RoutedApp/></MotionConfig>}
