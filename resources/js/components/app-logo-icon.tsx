import { ImgHTMLAttributes, SVGAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
<img src="/images/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" {...props} />
    );
}
