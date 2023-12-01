// Button2 Component
function Button2({ onClick, title, Icon, theme }) {

  // Variable to hold the background color string
  var bg;

  // Switch case to alter the bg variable based on the theme prop
  switch (theme) {
    case 'dark':
      bg = 'bg-dark-1';
      break;
    case 'primary':
      bg = 'bg-[#5383EC]';
      break;
    default:
      bg = 'bg-white';
      break;
  }

  // Return button component
  return (
    // Button with dynamic background color and click handler
    <button
      className={`text-center font-bold capitalize text-white flex gap-[26px] p-2 items-center text-[16px] w-[271px] box-border rounded-[4px] ${bg} hover:bg-opacity-80 bg-opacity-100 transition-all`}
      onClick={onClick}
    >
      {/* Span container for the Icon */}
      <span className="aspect-square flex justify-center items-center">
        <Icon />
      </span>

      {/* Span for the title (button text) */}
      <span>
        {title}
      </span>
    </button>
  );
}

// Export Button2 component
export default Button2;