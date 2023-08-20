import { Outlet } from 'react-router-dom'
import MainHeader from "../components/MainHeader";

function RootLayput() {
  return (
    <>
      <MainHeader />
      <Outlet/>
    </>
  );
}
export default RootLayput;
