import { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError('Failde to sign in.');
    }
    setLoading(false);
  };

  return (
    <div className='signup min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <h1 className='card-title text-center'>Login</h1>
                {error && <Alert variant='danger'>{error}</Alert>}
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      id='email'
                      className='form-control'
                      ref={emailRef}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      id='password'
                      className='form-control'
                      ref={passwordRef}
                    />
                  </div>
                  <button
                    type='submit'
                    className='btn btn-success btn-block btn-lg mt-4'
                    disabled={loading}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className='text-center mt-3'>
              <h5>
                Need an account? <Link to='/signup'>Sign Up</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
