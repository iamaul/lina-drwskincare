import { IconType } from 'react-icons/lib';
import { FaFacebook } from 'react-icons/fa';

import siteConfig from '~/site.config'

export const useSocialMedia = () => {
    const socials: [string, IconType][] = [
        [siteConfig.socials.Facebook, FaFacebook],
    ]

    return socials;
}