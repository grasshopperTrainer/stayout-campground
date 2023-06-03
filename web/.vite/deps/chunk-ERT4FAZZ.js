import {
  win
} from "./chunk-STSDGBGK.js";

// node_modules/@ionic/core/components/keyboard.js
var KeyboardResize;
(function(KeyboardResize2) {
  KeyboardResize2["Body"] = "body";
  KeyboardResize2["Ionic"] = "ionic";
  KeyboardResize2["Native"] = "native";
  KeyboardResize2["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
var Keyboard = {
  getEngine() {
    var _a;
    return ((_a = win === null || win === void 0 ? void 0 : win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable("Keyboard")) && (win === null || win === void 0 ? void 0 : win.Capacitor.Plugins.Keyboard);
  },
  getResizeMode() {
    const engine = this.getEngine();
    if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
      return Promise.resolve(void 0);
    }
    return engine.getResizeMode().catch((e) => {
      if (e.code === "UNIMPLEMENTED") {
        return void 0;
      }
      throw e;
    });
  }
};

export {
  KeyboardResize,
  Keyboard
};
/*! Bundled license information:

@ionic/core/components/keyboard.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-ERT4FAZZ.js.map
