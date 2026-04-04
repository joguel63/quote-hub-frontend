import { QuoteHubContextProvider } from './providers'
import { QuoteHubRouter } from './router'

const QuoteHubModule: React.FC = () => {
  return (
    <QuoteHubContextProvider>
      <QuoteHubRouter />
    </QuoteHubContextProvider>
  )
}

export default QuoteHubModule
