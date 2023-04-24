import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import BackgroundImage from "../../assets/background.png";

export function Header() {
  return (
    <HeaderContainer background={BackgroundImage}>
      <img src={Logo} />
      <span>GITHUB BLOG</span>
    </HeaderContainer>
  );
}
