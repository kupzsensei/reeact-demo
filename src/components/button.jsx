const Button = ({ action, color, label }) => {
  return (
    <button
      onClick={action}
      className={`font-bold border border-gray-400 px-4 py-1 rounded-md shadow-md ${
        color == "primary"
          ? "bg-blue-500"
          : color === "secondary"
          ? "bg-gray-500"
          : "bg-white"
      }`}
    >
      {label}
    </button>
  );
};

export const Header = () => {
  return <h1>I AM A HEADER</h1>;
};

export default Button;
