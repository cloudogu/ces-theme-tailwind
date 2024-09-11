import React from 'react';
import {CloudoguLogo, CloudoguLogoWhite} from "@src/index";
import LoadingIcon from "@deprecated_components/icons/LoadingIcon";

export default {
    title: 'Old CES Theme/Text and Icons/Icons',
};

export const All = () => <div>
    <CloudoguLogo className="w-16 h-16"/>
    <div className={"w-16 h-16 bg-label-secondary-font"}><CloudoguLogoWhite className={"w-16 h-16"}/></div>
    <LoadingIcon className={"w-16 h-16"}/>
</div>


export const Logo = () => <CloudoguLogo className="w-16 h-16"/>;

export const LogoWhite = () => <div className={"w-16 h-16 bg-label-secondary-font"}><CloudoguLogoWhite
    className={"w-16 h-16"}/></div>

export const Loading = () => <LoadingIcon className={"w-16 h-16"}/>;
