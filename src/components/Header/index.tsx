import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <span>GITHUB BLOG</span>
    </HeaderContainer>
  );
}
