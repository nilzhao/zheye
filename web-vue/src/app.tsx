import { RouterView } from 'vue-router';
import GlobalHeader from './components/global-header';

const App = () => {
  return (
    <div>
      <GlobalHeader />
      <div class="container">
        <RouterView />
      </div>
    </div>
  );
};

export default App;
