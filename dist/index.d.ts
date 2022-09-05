import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import { ReactComponent } from './components/Icon/svg/icAlert.svg';
import { ReactComponent as ReactComponent$1 } from './components/Icon/svg/icCamera.svg';
import { ReactComponent as ReactComponent$2 } from './components/Icon/svg/icChecked.svg';
import { ReactComponent as ReactComponent$3 } from './components/Icon/svg/icFlow.svg';
import { ReactComponent as ReactComponent$4 } from './components/Icon/svg/icColors.svg';

declare namespace icons {
  export {
    ReactComponent as icAlert,
    ReactComponent$1 as icCamera,
    ReactComponent$2 as icChecked,
    ReactComponent$3 as icFlow,
    ReactComponent$4 as icColors,
  };
}

declare type IconType = keyof typeof icons;
interface IconProps {
    icon: IconType;
}
interface IconBoxProps {
    icon: IconType;
    rotate?: number;
    width?: string;
    height?: string;
    color?: string;
    className?: string;
}
declare const Icon: ({ icon, rotate, width, height, color, className, }: IconBoxProps) => _emotion_react_jsx_runtime.JSX.Element;

export { Icon, IconBoxProps, IconProps, IconType };
