import { Form, Link, useLocation, useNavigation, useParams } from "@remix-run/react";

const LeftSideBar = () => {
  const location = useLocation()

  return (
    <div className="flex items-center justify-between sticky top-0 z-50 bg-gray-800 text-white p-4">
     <Link to='/'><img src="/download.png" alt=""  className="w-10 h-10"/></Link>
      
      <nav>
        <ul className="flex ">
           <li className="mr-4">
           <Link to="/" className={`text-xl  p-4 hover:text-red-600 ${location.pathname=="/"?'border-b-4 border-b-red-600':''}`}  >Home</Link>
          </li>
           <li className="mr-4">
           <Link to="/videos" className={`text-xl  p-4 hover:text-red-600 ${location.pathname=="/videos"?'border-b-4 border-b-red-600':''}`} >Video</Link>
          </li>
           <li >
           <Link to="/blog" className={`text-xl  p-4 hover:text-red-600 ${location.pathname=="/blog"?'border-b-4 border-b-red-600':''}`} >Blog</Link>
          </li>
         
          <li>
           <Link to="/login" className={`text-xl  p-4 hover:text-red-600 ${location.pathname=="/blog"?'border-b-4 border-b-red-600':''}`}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSideBar;
