import * as React from 'react';
function Greet({color, name}) {
  return <div style={{color}}>안녕하세요 {name}</div>
}
function Box({children}) {
  const style={
    border: '5px solid purple',
    padding : '16px',
  };
  return <div style={style}>{children}</div>;
}

function App () {
  return(
    <Box>
      <Greet name="react" color="red"/>
      <Greet  color="pink"/>
    </Box>
  )
}
export default App;