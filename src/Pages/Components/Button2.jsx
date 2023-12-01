function Button2({ onClick, title, Icon, theme}){
  var bg;
  switch (theme)
  {
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

  return(
    <button className={`text-center font-bold capitalize text-white flex gap-[26px] p-2 items-center text-[16px] w-[271px] box-border rounded-[4px] ${bg}`} onClick={onClick}>
      <span className="aspect-square flex justify-center items-center">
        <Icon /> 
      </span>
      <span>
        {title}
      </span>
    </button>
  );
}

export default Button2;