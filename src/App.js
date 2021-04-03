import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
