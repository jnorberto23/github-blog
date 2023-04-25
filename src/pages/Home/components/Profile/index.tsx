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
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

export function Profile() {
  type ProfileType = {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
  }

  const [profile, setProfile] = useState<ProfileType>();

  const fetchProfile = useCallback(async() => {
    await api.get("/users/jnorberto23").then((resp) => {
      const { id, login, avatar_url, name, company, bio, followers } = resp.data;
      setProfile({ id,login,avatar_url, name, company, bio, followers });
    });
  }, [])
   
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  console.log('profile', profile)
  return (
    <ProfileWrapper>
      <img
        src={profile?.avatar_url}
        alt="github avatar"
      />
      <ProfileContentWrapper>
        <ProfileTitleWrapper>
          <ProfileTitle>{profile?.name}</ProfileTitle>
          <ProfileTitleGithubLink to={`https://www.github.com/${profile?.login}`}>
            GitHub
            <ArrowSquareOut weight="bold" size={16} />
          </ProfileTitleGithubLink>
        </ProfileTitleWrapper>

        <ProfileDescription>{profile?.bio}</ProfileDescription>
        <ProfileIcons>
          <ProfileIconsSpan>
            <GithubLogo weight="fill" size={20} />
            {profile?.login}
          </ProfileIconsSpan>
          <ProfileIconsSpan>
            <Buildings weight="fill" size={20} />
            {profile?.company}
          </ProfileIconsSpan>
          <ProfileIconsSpan>
            <Users weight="fill" size={20} />
            {profile?.followers}
          </ProfileIconsSpan>
        </ProfileIcons>
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
}
