export const TextInput = ({
  placeholder,
  onChange,
  label,
}: {
  placeholder: string;
  onChange: (e: { target: { value: any } }) => void;
  label: string;
}) => {
  return (
    <div className="pt-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        onChange={onChange}
        type="text"
        className="rounded-xl w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
};
