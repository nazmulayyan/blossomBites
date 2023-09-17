
import './Button.css';

const Button = ({ buttonText, onClick }) => {
    return (
        <div className='flex justify-center mt-4'>
            <button className='button' onClick={onClick}><span>{buttonText}</span></button>
        </div>
    );
};

export default Button;
