import logo from './logo.svg';
import { Layout } from 'antd';
import './App.css';
import Home from './components/Home/Home';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content> <Home /></Content>
        <Footer>Footer</Footer>
      </Layout>


    </div>
  );
}

export default App;
