function Button1({ onClick, title }){
  return(
    <button className="rounded-[8px] py-2 px-5 text-center text-lg font-bold bg-blue-1 transition-all hover:bg-blue-500 capitalize text-white" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button1;