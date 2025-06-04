import { useMediaQuery } from "react-responsive"
import MenuMobile from "../../assets/menu-mobile.png";

export const NavBar = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="mt-2">
      <img src={MenuMobile} alt="" width={30} height={30} />
    </div>
  )
}
