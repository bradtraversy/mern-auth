import { Container, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>
            {userInfo ? `Welcome, ${userInfo.name}` : 'MERN Authentication'}
          </h1>
          <p className='text-center mb-4'>
            {userInfo
              ? `You are signed in as ${userInfo.email}. Open your profile to view your account.`
              : 'Create an account or sign in to access your profile.'}
          </p>
          <div className='d-flex'>
            {userInfo ? (
              <div className='d-flex gap-2'>
                <Button variant='primary' href='/profile'>
                  Open profile
                </Button>
                <Button variant='outline-primary' href='/gdpr'>
                  Privacy checks
                </Button>
              </div>
            ) : (
              <>
                <Button variant='primary' href='/login' className='me-3'>
                  Sign In
                </Button>
                <Button variant='secondary' href='/register'>
                  Register
                </Button>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
