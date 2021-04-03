import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const [error, setError] = useState('');
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failded to logout.');
    }
  };

  return (
    <div className='signup min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <h1 className='card-title text-center'>Profile</h1>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Email: </strong>
                {currentUser.email}
                <Link
                  to='/update-profile'
                  className='btn btn-primary btn-block mt-3'
                >
                  Update Profile
                </Link>
              </div>
            </div>
            <div className='text-center mt-3'>
              <button onClick={handleLogout} className='btn btn-danger'>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
