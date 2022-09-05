import * as React$1 from 'react';
import React__default, { SVGProps } from 'react';

interface ButtonProps extends React__default.HTMLAttributes<HTMLButtonElement> {
    /**
     * Button label button 속 text
     */
    label: string;
    /**
     * Button 기능별 type
     */
    buttonType: 'main' | 'sub' | 'disabled' | 'cancel';
}

interface CheckboxProps extends React__default.HTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
}
declare const CheckBox: (props: CheckboxProps) => JSX.Element;

interface InputProps extends React__default.HTMLAttributes<HTMLInputElement> {

    /**
     * input box label
     */
    label: string;
    /**
     * input type
     */
    type: 'text' | 'password';
    /**
     * Button Click Event handler
     */
    value: string;
    error?: string;
    /**
     * Input onChange Event handler
     */
    onChange: (e: React__default.ChangeEvent<HTMLInputElement>) => void;
    onDelete: () => void;
}

interface RadioProps extends React__default.HTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
    name?: string;
    checked?: boolean;
}
declare const Radio: React__default.ForwardRefExoticComponent<RadioProps & React__default.RefAttributes<HTMLInputElement>>;

interface SelectProps {
    option: string[];
    placeholder: string;
    disabled?: boolean;
}

declare const Select: (props: SelectProps) => JSX.Element;

interface TextareaProps {
    rows: number;
    placeholder: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

declare const Textarea: (props: TextareaProps) => JSX.Element;

var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAlert = function SvgAlert(props) {
  return /*#__PURE__*/React$1.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), _path || (_path = /*#__PURE__*/React$1.createElement("path", {
    fill: "currentColor",
    d: "M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"
  })));
};

declare namespace vectors {
  export {
    SvgAlert as alert,
  };
}

declare type IconName = keyof typeof vectors;
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {
    name: IconName;
}
/**
 * 프로젝트에 등록된 벡터 아이콘을 보여줍니다.
 *
 * Svg 요소의 모든 기분 소품을 허용합니다.
 *
 * Icon의  `width` 와 `height` 를 조정할수 있습니다.
 * `className` or `style` 사용하여 size or color 를 변경 가능합니다.
 */
declare const Icon: React__default.ForwardRefExoticComponent<Pick<IconProps, "string" | "style" | "clipPath" | "filter" | "mask" | "path" | "type" | "name" | "key" | "className" | "id" | "lang" | "tabIndex" | "role" | "color" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "fill" | "values" | "crossOrigin" | "height" | "max" | "min" | "width" | "media" | "method" | "target" | "accentHeight" | "accumulate" | "additive" | "alignmentBaseline" | "allowReorder" | "alphabetic" | "amplitude" | "arabicForm" | "ascent" | "attributeName" | "attributeType" | "autoReverse" | "azimuth" | "baseFrequency" | "baselineShift" | "baseProfile" | "bbox" | "begin" | "bias" | "by" | "calcMode" | "capHeight" | "clip" | "clipPathUnits" | "clipRule" | "colorInterpolation" | "colorInterpolationFilters" | "colorProfile" | "colorRendering" | "contentScriptType" | "contentStyleType" | "cursor" | "cx" | "cy" | "d" | "decelerate" | "descent" | "diffuseConstant" | "direction" | "display" | "divisor" | "dominantBaseline" | "dur" | "dx" | "dy" | "edgeMode" | "elevation" | "enableBackground" | "end" | "exponent" | "externalResourcesRequired" | "fillOpacity" | "fillRule" | "filterRes" | "filterUnits" | "floodColor" | "floodOpacity" | "focusable" | "fontFamily" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "format" | "fr" | "from" | "fx" | "fy" | "g1" | "g2" | "glyphName" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "glyphRef" | "gradientTransform" | "gradientUnits" | "hanging" | "horizAdvX" | "horizOriginX" | "href" | "ideographic" | "imageRendering" | "in2" | "in" | "intercept" | "k1" | "k2" | "k3" | "k4" | "k" | "kernelMatrix" | "kernelUnitLength" | "kerning" | "keyPoints" | "keySplines" | "keyTimes" | "lengthAdjust" | "letterSpacing" | "lightingColor" | "limitingConeAngle" | "local" | "markerEnd" | "markerHeight" | "markerMid" | "markerStart" | "markerUnits" | "markerWidth" | "maskContentUnits" | "maskUnits" | "mathematical" | "mode" | "numOctaves" | "offset" | "opacity" | "operator" | "order" | "orient" | "orientation" | "origin" | "overflow" | "overlinePosition" | "overlineThickness" | "paintOrder" | "panose1" | "pathLength" | "patternContentUnits" | "patternTransform" | "patternUnits" | "pointerEvents" | "points" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "preserveAlpha" | "preserveAspectRatio" | "primitiveUnits" | "r" | "radius" | "refX" | "refY" | "renderingIntent" | "repeatCount" | "repeatDur" | "requiredExtensions" | "requiredFeatures" | "restart" | "result" | "rotate" | "rx" | "ry" | "scale" | "seed" | "shapeRendering" | "slope" | "spacing" | "specularConstant" | "specularExponent" | "speed" | "spreadMethod" | "startOffset" | "stdDeviation" | "stemh" | "stemv" | "stitchTiles" | "stopColor" | "stopOpacity" | "strikethroughPosition" | "strikethroughThickness" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "surfaceScale" | "systemLanguage" | "tableValues" | "targetX" | "targetY" | "textAnchor" | "textDecoration" | "textLength" | "textRendering" | "to" | "transform" | "u1" | "u2" | "underlinePosition" | "underlineThickness" | "unicode" | "unicodeBidi" | "unicodeRange" | "unitsPerEm" | "vAlphabetic" | "vectorEffect" | "version" | "vertAdvY" | "vertOriginX" | "vertOriginY" | "vHanging" | "vIdeographic" | "viewBox" | "viewTarget" | "visibility" | "vMathematical" | "widths" | "wordSpacing" | "writingMode" | "x1" | "x2" | "x" | "xChannelSelector" | "xHeight" | "xlinkActuate" | "xlinkArcrole" | "xlinkHref" | "xlinkRole" | "xlinkShow" | "xlinkTitle" | "xlinkType" | "xmlBase" | "xmlLang" | "xmlns" | "xmlnsXlink" | "xmlSpace" | "y1" | "y2" | "y" | "yChannelSelector" | "z" | "zoomAndPan"> & React__default.RefAttributes<SVGSVGElement>>;


interface LabelProps {
    /**
     * label label
     */
    label: string;
    /**
     * label width 미입력시 default width 사용
     */
    width?: number;
    /**
     * label height 미입력시 default height 사용
     */
    height?: number;
    /**
     * label size  "S" | "L" 대문자
     */
    size: string;
    /**
     * label icon 사용시 기입
     */
    icon?: boolean;
}
declare const Label: ({ ...props }: LabelProps) => JSX.Element;

interface ToggleProps {
    /**
     * Toggle width 미입력시 default width 사용
     */
    width?: number;
    /**
     * Toggle height 미입력시 default height 사용
     */
    height?: number;
    /**
     * Toggle disabled 미사용시 true 기입
     */
    disabled: boolean;
    /**
     * Toggle  state Toggle event에 사용될 상태 값 (boolean)
     */
    state: boolean;
    /**
     * Toggle Click Event handler
     */
    onClick: (e?: React__default.MouseEvent<HTMLElement>) => void;
}

declare function ChatInput(): JSX.Element;

interface CatherItemProps {
    data: [];
    rowItem: number;
    roundItem?: boolean;
}
declare function CatherItem(props: CatherItemProps): JSX.Element;


declare function GlobalStyles(): JSX.Element;

export { ButtonProps, CatherItem, CatherItemProps, ChatInput, CheckBox, CheckBox as Checkbox, CheckboxProps, GlobalStyles, Icon, IconProps, InputProps, Label, LabelProps, Radio, RadioProps, Select, SelectProps, Textarea, TextareaProps, ToggleProps };