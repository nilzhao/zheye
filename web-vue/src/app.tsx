import HelloWorld from './components/hello-word';
import logoUrl from './assets/logo.png';
import FunctionalComponent from './components/functional';

const App = () => {
  return (
    <div>
      <img alt="Vue logo" src={logoUrl} />
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      <FunctionalComponent title="函数式组件" />
    </div>
  );
};

export default App;
