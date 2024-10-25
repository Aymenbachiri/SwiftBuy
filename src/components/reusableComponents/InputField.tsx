import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error: FieldError | undefined;
};

export function InputField({
  label,
  type,
  placeholder,
  registration,
  error,
}: InputFieldProps) {
  return (
    <main className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className="block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {error ? <p className="mt-1 text-red-500">{error.message}</p> : null}
    </main>
  );
}
