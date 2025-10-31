import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscDashboard } from "react-icons/vsc";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaJediOrder } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { Collapse } from "react-collapse";
const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-[#f1f1f1] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
        <div className="py-2 w-full">
          <Link to="/">
            <img
              src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
              alt=""
              className="w-[120px]  "
            />
          </Link>
        </div>
      </div>

      <ul className="mt-4">
        <li>
          <Link to='/'>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <VscDashboard className="text-[18px]" />
            <span> Dashboard</span>
          </Button>
          </Link>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] "onClick={() => isOpenSubMenu(1)}>
            <RiHomeOfficeFill className="text-[18px]"  />
            <span>Home Slides</span>
            <span
              className="ml-auto  w-[30px] h-[30px] flex items-center justify-center "
             
            >
              <FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 1 ? true : false}>
            <ul className="w-full">
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[14px] !font-[600] !pl-8 !flex !gap-3">
                 <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.6)]"></span> Add Home Banner Slide
                </Button>
              </li>
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full  !text-[14px] !font-[600] !pl-8 !flex !gap-3" >
                 <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.6)]"></span> Home Slide List
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
           <Link to='/users'>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <FaUserSecret className="text-[18px]" />
            <span> Users</span>
          </Button>
          </Link>
        </li>
        <li>
         
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] "onClick={() => isOpenSubMenu(3)}>
            <MdProductionQuantityLimits className="text-[18px]" />
            <span>Products</span>
            <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center ">
              <FaAngleDown  className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`}/>
            </span>
          </Button>
          
         <Collapse isOpened={submenuIndex === 3 ? true : false}>
            <ul className="w-full">
              <li className="w-full">
                 <Link to='/products'>
                <Button className="!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[14px] !font-[600] !pl-8 !flex !gap-3">
                 <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.6)]"></span>Product List
                </Button>
                </Link>
              </li>
              <li className="w-full">
                 <Link to='/product/upload'>
                <Button className="!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full  !text-[14px] !font-[600] !pl-8 !flex !gap-3" >
                 <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.6)]"></span>Product Upload
                </Button>
                </Link>
              </li>
            </ul>
          </Collapse>

        </li>
        <li>
          
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] "onClick={() => isOpenSubMenu(4)}>
            <BiCategoryAlt className="text-[18px]" />
            <span>Category</span>
            <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center ">
              <FaAngleDown  className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} />
            </span>
          </Button>
          
           <Collapse isOpened={submenuIndex === 4 ? true : false}>
            <ul className="w-full">
              <li className="w-full">
                 <Link to='/category'>
                <Button className="!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[14px] !font-[600] !pl-8 !flex !gap-3">
                 <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.6)]"></span>Category List
                </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link to='/category/add'>
                <Button className="!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full  !text-[14px] !font-[600] !pl-8 !flex !gap-3" >
                 <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.6)]"></span> Add a Category
                </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link to='/category/subCat'>
                <Button className="!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full  !text-[14px] !font-[600] !pl-8 !flex !gap-3" >
                 <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.6)]"></span>Sub Category List
                </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link to='/category/subCat/add'>
                <Button className="!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full  !text-[14px] !font-[600] !pl-8 !flex !gap-3" >
                 <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.6)]"></span> Add a Sub Category
                </Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Link to='/users'>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <FaJediOrder className="text-[18px]" />
            <span> Orders</span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to='/users'>
          <Button className="w-full !capitalize !justify-start flex gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1] ">
            <CgLogOut className="text-[18px]" />
            <span>LogOut</span>
          </Button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
