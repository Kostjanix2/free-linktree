import React from "react";
import { BackgroundContainer, TitleBg,VideoBg, LinkTreePageContainer, ContentContainer, ProfileImage, ProfileName, ProfileDescription, LinkContainer, LinkIcon, LinkText } from "./LinkTreeElements";
import video from "./video.mp4"
import image from "./profile.png"
import {profile, linkList} from "./editme"

export const LinkTreePage = () =>{
    return(
        <LinkTreePageContainer>
            <BackgroundContainer id="Home">
                <TitleBg>
                    <VideoBg autoPlay loop muted src={video} type ="video/mp4"/>
                </TitleBg>
                <ContentContainer>
                    <ProfileImage src={image}/>
                    <ProfileName style={{color:profile.textcolor}}>{profile.name}</ProfileName>
                    <ProfileDescription style={{color:profile.textcolor}}>{profile.description}</ProfileDescription>
                    {linkList?.map((link) => {
                        return(
                            <LinkContainer style={{backgroundColor:link.containercolor}} href={link.link}>
                                <LinkIcon src={link.iconSrc}/>
                                <LinkText style={{color:link.textcolor}}>{link.text}</LinkText>
                            </LinkContainer>
                        )
                    })}
                </ContentContainer>
            </BackgroundContainer>
        </LinkTreePageContainer>
    )
}

export default LinkTreePage