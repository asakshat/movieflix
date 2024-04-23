import { Button, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { FaRegUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function SignUp() {
	return (
		<form className="flex max-w-md flex-col gap-4">
			<div>
				<TextInput
					id="email1"
					type="email"
					icon={HiMail}
					placeholder="john@doe.com"
					required
				/>
			</div>

			<TextInput
				id="username3"
				placeholder="Username"
				icon={FaRegUser}
				required
			/>

			<div>
				<TextInput
					id="password1"
					type="password"
					required
					icon={RiLockPasswordFill}
				/>
			</div>

			<Button type="submit">Submit</Button>
		</form>
	);
}
