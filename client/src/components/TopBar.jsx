import userPhoto from "../assets/user.png";

export const TopBar = () => {
  return (
    <div className="bg-white-100 h-[106px] w-full">
      <div className="flex flex-row-reverse items-center h-full p-10">
        <img src={userPhoto} />
        <div className='m-2'>
          <p className="text-right font-bold">Alessandro Bianchi</p>
          <p className="text-right font-normal">Admin</p>
        </div>
      </div>
    </div>
  );
};
