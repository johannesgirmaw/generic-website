import { useNavigate } from '@remix-run/react';
import { ReactNode } from 'react';

const Modal = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
      <div className="bg-white flex items-center justify-center rounded-lg shadow-lg p-6  ">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={()=>{navigate("..")}}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;