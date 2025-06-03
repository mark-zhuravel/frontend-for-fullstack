import { useForm } from 'react-hook-form';
import InputField from '../form/components/InputField';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  onSignUpClick: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm({ onSubmit, onSignUpClick }: LoginFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmitForm = async (data: LoginFormData) => {
    await onSubmit(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <InputField
        label="Email"
        type="email"
        name="email"
        register={register}
        required
        error={errors.email?.message}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        register={register}
        required
        error={errors.password?.message}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Login
      </button>
      <button
        type="button"
        onClick={onSignUpClick}
        className="w-full text-blue-500 hover:text-blue-600"
      >
        Sign Up
      </button>
    </form>
  );
} 