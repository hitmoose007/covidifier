import ConfettiExplosion from 'react-confetti-explosion';
import React from 'react';
function App() {
  const [isExploding, setIsExploding] = React.useState(true);
  return <>{isExploding && <ConfettiExplosion />}</>;
}

export default App;