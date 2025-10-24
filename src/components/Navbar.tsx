import { useLocation, useNavigate } from 'react-router';
import Button from './Button';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleQuizClick = () => {
        navigate('/quiz');
    };

    const handleLoginClick = () => {
        console.log('LOGIN button clicked');
    };

    return (
        <nav className="w-screen bg-blue-200 p-2">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button
                        onClick={handleHomeClick}
                        disabled={location.pathname === '/'}
                    >
                        HOME
                    </Button>
                    <Button
                        onClick={handleQuizClick}
                        disabled={location.pathname === '/quiz'}
                    >
                        QUIZ
                    </Button>
                </div>
                <Button onClick={handleLoginClick}>LOGIN</Button>
            </div>
        </nav>
    );
};

export default Navbar;
