import Catogariesimages from "./Catogaries images";
import Catogariesimages2 from "./Catogariesimages2";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Catogaries() {

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  }
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  }

  // const scrollLeft2 = () => {
  //   document.getElementById("content2").scrollLeft -= 400;
  // }
  // const scrollRight2 = () => {
  //   document.getElementById("content2").scrollLeft += 400;
  // }


  return (
    <div className="relative">
      <div className="text-center py-4  text-xl font-bold">Bussiness catogaries</div>
      <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
        <div>
          < Catogariesimages />



        </div>
      </div>
      
      <div className="text-center py-4 mt-20 text-xl font-bold">festival catogaries</div>
      <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
        <div>
          < Catogariesimages2 />
        </div>
      </div>
    </div>
   
  );
}

export default Catogaries;

