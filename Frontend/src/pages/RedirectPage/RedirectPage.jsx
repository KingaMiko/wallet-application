import { Background } from 'components';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { walletInstance } from 'utils/api';

const RedirectPage = () => {
  const navigate = useNavigate();
  const { verificationToken } = useParams();

  const verifyUrl = `${process.env.REACT_APP_API_URL}/users/verify/${verificationToken}`;

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await walletInstance.get(verifyUrl);
        navigate('/login');
      } catch (error) {
        console.error(error);
        navigate('/register');
      }
    };

    verifyUser();
  }, [navigate, verifyUrl]);

  return (
    <>
      <Helmet>
        <title>Verification - Wallet</title>
      </Helmet>

      <Background />
    </>
  );
};

export default RedirectPage;
