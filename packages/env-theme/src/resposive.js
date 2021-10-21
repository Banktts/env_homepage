import {useMediaQuery} from "react-responsive";

export const isDesktop = useMediaQuery(
    { minDeviceWidth: 1224 }
)

export const isTablet = useMediaQuery(
    { minDeviceWidth: 769,maxWidth:1223 },
)

export const isMobile = useMediaQuery(
    {maxWidth: 768}
)