import './App.css'
import { useFlags } from 'launchdarkly-react-client-sdk'

function App() {
  const { greentext } = useFlags()

  return (
    <div>
      <p {...(greentext ? { style: { color: 'green' } } : {})}>
        Green flag is {greentext ? 'true' : 'false'}
      </p>
    </div>
  )
}

export default App
