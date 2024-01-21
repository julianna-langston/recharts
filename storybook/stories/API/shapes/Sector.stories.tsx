import React from 'react';
import { Sector } from '../../../../src';
import { GeneralStyle } from '../props/Styles';
import { animationBegin, animationDuration, animationEasing, isAnimationActive } from '../props/AnimationProps';
import { SectorProps } from '../props/SectorProps';
import {
  onAbort,
  onAbortCapture,
  onAnimationEnd,
  onAnimationEndCapture,
  onAnimationIteration,
  onAnimationIterationCapture,
  onAnimationStart,
  onAnimationStartCapture,
  onAuxClick,
  onAuxClickCapture,
  onBeforeInput,
  onBeforeInputCapture,
  onBlur,
  onBlurCapture,
  onCanPlay,
  onCanPlayCapture,
  onCanPlayThrough,
  onCanPlayThroughCapture,
  onChange,
  onChangeCapture,
  onClick,
  onClickCapture,
  onCompositionEnd,
  onCompositionEndCapture,
  onCompositionStart,
  onCompositionStartCapture,
  onCompositionUpdate,
  onCompositionUpdateCapture,
  onContextMenu,
  onContextMenuCapture,
  onCopy,
  onCopyCapture,
  onCut,
  onCutCapture,
  onDoubleClick,
  onDoubleClickCapture,
  onDrag,
  onDragCapture,
  onDragEnd,
  onDragEndCapture,
  onDragEnter,
  onDragEnterCapture,
  onDragExit,
  onDragExitCapture,
  onDragLeave,
  onDragLeaveCapture,
  onDragOver,
  onDragOverCapture,
  onDragStart,
  onDragStartCapture,
  onDrop,
  onDropCapture,
  onDurationChange,
  onDurationChangeCapture,
  onEmptied,
  onEmptiedCapture,
  onEncrypted,
  onEncryptedCapture,
  onEnded,
  onEndedCapture,
  onError,
  onErrorCapture,
  onFocus,
  onFocusCapture,
  onGotPointerCapture,
  onGotPointerCaptureCapture,
  onInput,
  onInputCapture,
  onInvalid,
  onInvalidCapture,
  onKeyDown,
  onKeyDownCapture,
  onKeyPress,
  onKeyPressCapture,
  onKeyUp,
  onKeyUpCapture,
  onLoad,
  onLoadCapture,
  onLoadedData,
  onLoadedDataCapture,
  onLoadedMetadata,
  onLoadedMetadataCapture,
  onLoadStart,
  onLoadStartCapture,
  onLostPointerCapture,
  onLostPointerCaptureCapture,
  onMouseDown,
  onMouseDownCapture,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseMoveCapture,
  onMouseOut,
  onMouseOutCapture,
  onMouseOver,
  onMouseOverCapture,
  onMouseUp,
  onMouseUpCapture,
  onPaste,
  onPasteCapture,
  onPause,
  onPauseCapture,
  onPlay,
  onPlayCapture,
  onPlaying,
  onPlayingCapture,
  onPointerCancel,
  onPointerCancelCapture,
  onPointerDown,
  onPointerDownCapture,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  onPointerMoveCapture,
  onPointerOut,
  onPointerOutCapture,
  onPointerOver,
  onPointerOverCapture,
  onPointerUp,
  onPointerUpCapture,
  onProgress,
  onProgressCapture,
  onRateChange,
  onRateChangeCapture,
  onReset,
  onResetCapture,
  onScroll,
  onScrollCapture,
  onSeeked,
  onSeekedCapture,
  onSeeking,
  onSeekingCapture,
  onSelect,
  onSelectCapture,
  onStalled,
  onStalledCapture,
  onSubmit,
  onSubmitCapture,
  onSuspend,
  onSuspendCapture,
  onTimeUpdate,
  onTimeUpdateCapture,
  onTouchCancel,
  onTouchCancelCapture,
  onTouchEnd,
  onTouchEndCapture,
  onTouchMove,
  onTouchMoveCapture,
  onTouchStart,
  onTouchStartCapture,
  onTransitionEnd,
  onTransitionEndCapture,
  onVolumeChange,
  onVolumeChangeCapture,
  onWaiting,
  onWaitingCapture,
  onWheel,
  onWheelCapture,
} from '../props/EventHandlers';

export default {
  component: Sector,
  argTypes: {
    ...SectorProps,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive,
    stroke: GeneralStyle.stroke,
    fill: GeneralStyle.fill,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated', disable: true } },
    // Event Handlers available
    onCopy,
    onCopyCapture,
    onCut,
    onCutCapture,
    onPaste,
    onPasteCapture,
    onCompositionEnd,
    onCompositionEndCapture,
    onCompositionStart,
    onCompositionStartCapture,
    onCompositionUpdate,
    onCompositionUpdateCapture,
    onFocus,
    onFocusCapture,
    onBlur,
    onBlurCapture,
    onChange,
    onChangeCapture,
    onBeforeInput,
    onBeforeInputCapture,
    onInput,
    onInputCapture,
    onReset,
    onResetCapture,
    onSubmit,
    onSubmitCapture,
    onInvalid,
    onInvalidCapture,
    onLoad,
    onLoadCapture,
    onError,
    onErrorCapture,
    onKeyDown,
    onKeyDownCapture,
    onKeyPress,
    onKeyPressCapture,
    onKeyUp,
    onKeyUpCapture,
    onAbort,
    onAbortCapture,
    onCanPlay,
    onCanPlayCapture,
    onCanPlayThrough,
    onCanPlayThroughCapture,
    onDurationChange,
    onDurationChangeCapture,
    onEmptied,
    onEmptiedCapture,
    onEncrypted,
    onEncryptedCapture,
    onEnded,
    onEndedCapture,
    onLoadedData,
    onLoadedDataCapture,
    onLoadedMetadata,
    onLoadedMetadataCapture,
    onLoadStart,
    onLoadStartCapture,
    onPause,
    onPauseCapture,
    onPlay,
    onPlayCapture,
    onPlaying,
    onPlayingCapture,
    onProgress,
    onProgressCapture,
    onRateChange,
    onRateChangeCapture,
    onSeeked,
    onSeekedCapture,
    onSeeking,
    onSeekingCapture,
    onStalled,
    onStalledCapture,
    onSuspend,
    onSuspendCapture,
    onTimeUpdate,
    onTimeUpdateCapture,
    onVolumeChange,
    onVolumeChangeCapture,
    onWaiting,
    onWaitingCapture,
    onAuxClick,
    onAuxClickCapture,
    onClick,
    onClickCapture,
    onContextMenu,
    onContextMenuCapture,
    onDoubleClick,
    onDoubleClickCapture,
    onDrag,
    onDragCapture,
    onDragEnd,
    onDragEndCapture,
    onDragEnter,
    onDragEnterCapture,
    onDragExit,
    onDragExitCapture,
    onDragLeave,
    onDragLeaveCapture,
    onDragOver,
    onDragOverCapture,
    onDragStart,
    onDragStartCapture,
    onDrop,
    onDropCapture,
    onMouseDown,
    onMouseDownCapture,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseMoveCapture,
    onMouseOut,
    onMouseOutCapture,
    onMouseOver,
    onMouseOverCapture,
    onMouseUp,
    onMouseUpCapture,
    onSelect,
    onSelectCapture,
    onTouchCancel,
    onTouchCancelCapture,
    onTouchEnd,
    onTouchEndCapture,
    onTouchMove,
    onTouchMoveCapture,
    onTouchStart,
    onTouchStartCapture,
    onPointerDown,
    onPointerDownCapture,
    onPointerMove,
    onPointerMoveCapture,
    onPointerUp,
    onPointerUpCapture,
    onPointerCancel,
    onPointerCancelCapture,
    onPointerEnter,
    onPointerLeave,
    onPointerOver,
    onPointerOverCapture,
    onPointerOut,
    onPointerOutCapture,
    onGotPointerCapture,
    onGotPointerCaptureCapture,
    onLostPointerCapture,
    onLostPointerCaptureCapture,
    onScroll,
    onScrollCapture,
    onWheel,
    onWheelCapture,
    onAnimationStart,
    onAnimationStartCapture,
    onAnimationEnd,
    onAnimationEndCapture,
    onAnimationIteration,
    onAnimationIterationCapture,
    onTransitionEnd,
    onTransitionEndCapture,
  },
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <svg height={args.height} width="100%">
        <Sector {...args} />
      </svg>
    );
  },
  args: {
    cx: 0,
    cy: 0,
    outerRadius: 100,
    startAngle: 300,
    endAngle: 360,
    stroke: '#000',
    fill: 'red',
  },
};
