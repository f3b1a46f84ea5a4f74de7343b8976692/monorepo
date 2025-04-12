import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Button } from '@heroui/react';

export const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Button
            isIconOnly
            startContent={<FaArrowLeft />}
            className="fixed top-2  left-2 backdrop-blur-lg z-1000 rounded-full text-white text-lg"
            onClick={handleClick}
        />
    );
};
