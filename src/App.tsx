import './App.css'
import { useFlags } from 'launchdarkly-react-client-sdk'

function App() {
  const { myTestFlag } = useFlags()

  return (
    <div>
      <p {...(myTestFlag ? { style: { color: 'green' } } : {})}>
        Green flag is {myTestFlag ? 'true' : 'false'}
      </p>
    </div>
  )
}

export default App
