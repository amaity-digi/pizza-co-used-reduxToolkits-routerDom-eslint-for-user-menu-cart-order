import { Outlet, useNavigation } from "react-router-dom"
import CartOverView from "../features/cart/CartOverView"
import Header from "./Header"
import Loader from "./Loader";
// Outlet component comes from react-router-dom , It is used to render whatever is the current nested route.
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation?.state === 'loading';
  console.log("isLoading", isLoading);
   
  return (
    <div className="layout">
      { isLoading && <Loader /> }
        <Header/>
        <main>
            <h1>Content</h1>
            <Outlet />  
        </main>
        <CartOverView />
    </div>
  )
}

export default AppLayout