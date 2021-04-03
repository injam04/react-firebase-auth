import { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Password dont matched.');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError('Failde to create an account.');
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
                <h1 className='card-title text-center'>Sign Up</h1>
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
                  <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                      type='password'
                      id='confirmPassword'
                      className='form-control'
                      ref={confirmPasswordRef}
                    />
                  </div>
                  <button
                    type='submit'
                    className='btn btn-success btn-block btn-lg mt-4'
                    disabled={loading}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
            <div className='text-center mt-3'>
              <h5>
                Already have an account? <Link to='/login'>Login</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
