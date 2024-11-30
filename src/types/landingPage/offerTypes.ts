
import { StaticImageData } from "next/image";

export interface OfferCardPropType {
    imageSrc: StaticImageData;
    cardHeading: string;
    cardDescri: string;
}

export interface StateType {
    name: string;
    desc: string;
    imgSrc: StaticImageData;
}

export interface StateCardPropType {
    state: StateType;
}