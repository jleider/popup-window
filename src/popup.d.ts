declare module 'popup-window' {

  export class Popup {
    constructor(url: string, options?: Popup.Features);

    setFeatures(features: Popup.Features): Popup;
    featureString(): string;
    open(): Popup;
    close(): Popup;
    clearTimer(): void;
    waitForClosed(): void;
    setCallback(name: string, cb: (p: Popup) => void): void;
    blocked(cb: (p: Popup) => void): void;
    opened(cb: (p: Popup) => void): void;
    closed(cb: (p: Popup) => void): void;
  }

  export namespace Popup {
    interface Features {
      width?: number,
      height?: number,
      left?: number,
      top?: number,
      menubar?: number,
      toolbar?: number,
      location?: number,
      status?: number,
      resizable?: number,
      scrollbars?: number
    }
  }
}

