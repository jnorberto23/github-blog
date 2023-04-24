import { Buildings, GithubLogo, Users } from "phosphor-react";
import {
  ProfileDescription,
  ProfileIcons,
  ProfileIconsSpan,
  ProfileTextWrapper,
  ProfileTitle,
  ProfileWrapper,
} from "./styles";

export function Profile() {
  return (
    <ProfileWrapper>
      <img
        src="https://avatars.githubusercontent.com/u/73195134?v=4"
        alt="github avatar"
      />
      <ProfileTextWrapper>
        <ProfileTitle>João Norberto</ProfileTitle>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <ProfileIcons>
          <ProfileIconsSpan>
            <GithubLogo weight="fill" size={20}/>
            jnorberto23
          </ProfileIconsSpan>
          <ProfileIconsSpan>
            <Buildings weight="fill" size={20}/>
            Luby Software
          </ProfileIconsSpan>
          <ProfileIconsSpan>
            <Users weight="fill" size={20}/>
            30
          </ProfileIconsSpan>
        </ProfileIcons>
      </ProfileTextWrapper>
    </ProfileWrapper>
  );
}
