import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getMenu } from "../../data/api";
interface NavProps {
  ulPosition: string;
  liStyle: string;
}
const NavSection: React.FC<NavProps> = ({ ulPosition, liStyle }) => {
  const [data, setData] = useState<any>([])
  const getData = async () => {
    const data = await getMenu()
    setData(data?.data?.data)
  }
  useEffect(() => {
    getData()
  }, [])
  console.log("data", data);
  return (
    <>
      <ul className={ulPosition}>
        {data?.map((item: any, index: string) => (
          <li key={index} className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button" href={item.url}>
              {item?.name} {item?.children.length!=0 ? <i className="fa-regular fa-angle-down"></i> : ""}
            </a>
            {item?.children.length!=0 ? <ul className="tl-submenu">
              {item?.children.map((item: any, index: any) => (
                <li key={index}>
                  <NavLink to={item?.url}>{item.title}</NavLink>
                </li>
              ))}
            </ul>: ""}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavSection;
