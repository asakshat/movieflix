import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { FaRegUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function LoginForm() {
	return (
		<form className="flex max-w-md flex-col gap-4">
			<div>
				<TextInput
					id="username3"
					placeholder="Username"
					icon={FaRegUser}
					required
				/>
			</div>
			<div>
				<TextInput
					id="password1"
					type="password"
					required
					icon={RiLockPasswordFill}
				/>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="remember" />
				<Label htmlFor="remember">Remember me</Label>
			</div>
			<Button type="submit">Submit</Button>
		</form>
	);
}
