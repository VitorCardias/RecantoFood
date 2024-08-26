import Routes from './src/routes';
import RoutesAuth from './src/routesAuth';
import Busca from './src/screens/busca/busca';

const isUserAuth = false;

export default function App() {

  return  isUserAuth ? <RoutesAuth /> : <Routes />
}