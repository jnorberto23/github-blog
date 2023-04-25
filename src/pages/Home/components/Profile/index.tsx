import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import {
  ProfileDescription,
  ProfileIcons,
  ProfileIconsSpan,
  ProfileContentWrapper,
  ProfileTitle,
  ProfileTitleGithubLink,
  ProfileTitleWrapper,
  ProfileWrapper,
} from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

export function Profile() {
  type ProfileType = {
    id: number;
    avatar_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
  }

  const [profile, setProfile] = useState<ProfileType>();
  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    await api.get("/users/jnorberto23").then((resp) => {
      const { id, avatar_url, name, company, bio, followers } = resp.data;
      setProfile({ id, avatar_url, name, company, bio, followers });
    });
  }

  console.log('profile', profile)
  return (
    <ProfileWrapper>
      <img
        src="https://avatars.githubusercontent.com/u/73195134?v=4"
        alt="github avatar"
      />
      <ProfileContentWrapper>
        <ProfileTitleWrapper>
          <ProfileTitle>João Norberto</ProfileTitle>
          <ProfileTitleGithubLink to="https://www.github.com">
            GitHub
            <ArrowSquareOut weight="bold" size={16} />
          </ProfileTitleGithubLink>
        </ProfileTitleWrapper>

        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <ProfileIcons>
          <ProfileIconsSpan>
            <GithubLogo weight="fill" size={20} />
            jnorberto23
          </ProfileIconsSpan>
          <ProfileIconsSpan>
            <Buildings weight="fill" size={20} />
            Luby
          </ProfileIconsSpan>
          <ProfileIconsSpan>
            <Users weight="fill" size={20} />
            31
          </ProfileIconsSpan>
        </ProfileIcons>
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
}
