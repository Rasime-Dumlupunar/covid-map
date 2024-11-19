import { IoWarning } from "react-icons/io5";

const Error = ({message, retry}) => {
  return (
    <div className="flex flex-col gap-6 col-span-3 w-full">
      <div className="flex items-center gap-4 bg-red-500 p-5 rounded-md">
        <IoWarning className="text-4xl"/>
        
        <div>
          <h2>Üzgünüz bir hata oluştu!</h2>
          <p>{message}</p>
        </div>

      </div>
      <button
      onClick={retry}
      className="border text-gray-100 transition bg-gray-500 hover:bg-red-500 p-2 rounded-md"> TEKRAR DENE</button>
    </div>
  )
}

export default Error;
