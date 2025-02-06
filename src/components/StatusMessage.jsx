/* eslint-disable react/prop-types */

export const StatusMessage = ({ status, show, streak }) => {
  const getStatusContent = () => {
    switch (status) {
      case "success":
        return {
          style: "bg-green-100 text-green-800",
          message: `Correct! ${streak > 1 ? `${streak} in a row!` : ""}`,
        };
      case "error":
        return {
          style: "bg-red-100 text-red-800",
          message: "Wrong! Game Over!",
        };
      case "timeout":
        return {
          style: "bg-yellow-100 text-yellow-800",
          message: "Time's up! Game Over!",
        };
      default:
        return {
          style: "bg-gray-100 text-gray-800",
          message: "",
        };
    }
  };

  const { style, message } = getStatusContent();

  return (
    <div
      data-testid="gameStatus"
      className={`p-4 rounded-lg transition-all duration-300 ${style} ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ minHeight: "50px", visibility: show ? "visible" : "hidden" }}
    >
      <p className="text-center font-medium">{message}</p>
    </div>
  );
};
