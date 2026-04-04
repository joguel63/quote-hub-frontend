// entry point for the module

import { QuoteFormProvider } from './providers'
import { QuoteHubRouter } from './router'

const QuoteHubModule: React.FC = () => {
  return (
    <QuoteFormProvider>
      <QuoteHubRouter />
    </QuoteFormProvider>
  )
}

export default QuoteHubModule
