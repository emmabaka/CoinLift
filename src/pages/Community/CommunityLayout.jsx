import { NavLink, Outlet } from "react-router-dom";

const CommunityLayout = () => {
  return (
    <>
      <NavLink to="/community">Feed</NavLink>
      <NavLink to="profile">My Page</NavLink>
      <NavLink to="notifications">Notifications</NavLink>
      <NavLink to="liked">Liked</NavLink>
      <NavLink to="rules">Rules</NavLink>
      <Outlet />
    </>
  );
};

export default CommunityLayout;
