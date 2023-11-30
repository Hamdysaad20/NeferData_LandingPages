export default function Button1({onClickFuction, title}) {
  return (
    <button className="rounded-[8px] py-[8px] px-[20px] text-center text-[16px] font-bold bg-[#2D9CDB] capitalize text-white" onClick={onClickFuction}>
      {title}
    </button>
  );
}
