import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiResturent";
import MenuItem from "./MenuItem";


function Menu() {
  const menu = useLoaderData();
  console.log("Menu", menu);

  return (
    <ul>
      {menu?.map(pizza =>(<MenuItem pizza={pizza} key={pizza.id}/> ))}
    </ul>
  )
}

export const menuLoader = async () => {
 const menu = await getMenu();
 return menu;
}

export default Menu