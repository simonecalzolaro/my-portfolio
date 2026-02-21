import { useState } from 'react'
import Loading from './components/Loading.tsx'
import Home from './components/Home.tsx'

export default function App() {
  // THE MASTER SWITCH: Tracks if the opening sequence is finished
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <>
      {/* If loading is not complete, show Loading. Pass it the trigger to flip the switch. */}
      {!loadingComplete ? (
        <Loading onComplete={() => setLoadingComplete(true)} />
      ) : (
        /* Once the switch is flipped, mount the Home page */
        <Home />
      )}
    </>
  )
}