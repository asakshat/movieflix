import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

export function ModalComponent() {
	const [openModal, setOpenModal] = useState(false);
	const [activeButton, setActiveButton] = useState('login');

	return (
		<>
			<FaUser
				onClick={() => setOpenModal(true)}
				className="text-teal-400 text-xl cursor-pointer "
			/>
			<Modal
				size="lg"
				dismissible
				show={openModal}
				onClose={() => setOpenModal(false)}
			>
				<div className="flex gap-4 absolute right-2 transform translate-x-28 rotate-90 top-36">
					<p
						onClick={() => setActiveButton('login')}
						className={`${
							activeButton === 'login' ? 'bg-white' : 'bg-gray-300'
						} text-black font-bold py-2 px-4 cursor-pointer`}
					>
						Login
					</p>
					<p
						onClick={() => setActiveButton('signup')}
						className={`${
							activeButton === 'signup' ? 'bg-white' : 'bg-gray-300'
						} text-black font-bold py-2 px-4 rounded cursor-pointer`}
					>
						Signup
					</p>
				</div>
				<Modal.Header>
					<span>
						{activeButton === 'login' ? 'Welcome Back!' : 'Sign Up Now!'}
					</span>
				</Modal.Header>

				<Modal.Body>
					{activeButton === 'login' ? <LoginForm /> : <SignUp />}
				</Modal.Body>
			</Modal>
		</>
	);
}
