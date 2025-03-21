import { FaBorderAll } from "react-icons/fa6";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaBurger } from "react-icons/fa6";
 const Category=[
  {

    id:1,
    name:"All",
    image:<FaBorderAll  className="w-[60px] h-[60px] text-green-600"/>
  },

  {

    id:2,
    name:"Breakfast",
    image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
  },

  {

    id:3,
    name:"Soup",
    image:<LuSoup className="w-[60px] h-[60px] text-green-600" />
  },

  {

    id:4,
    name:"Pasta",
    image:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />
  },
  {

    id:5,
    name:"Main course",
    image:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600" />
  },
  {

    id:6,
    name:"Pizza",
    image:<GiFullPizza className="w-[60px] h-[60px] text-green-600" />

  },
  {

    id:7,
    name:"Burger",
    image:<FaBurger className="w-[60px] h-[60px] text-green-600" />
  }


]
export default Category;
