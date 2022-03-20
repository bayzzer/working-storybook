var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import './label.css';
export var Label = function (_a) {
    var text = _a.text, size = _a.size, _b = _a.upper, upper = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, customColor = _a.customColor;
    return (_jsx("span", __assign({ style: { color: customColor }, className: "".concat(size, " text-").concat(color) }, { children: upper ? text.toUpperCase() : text })));
};
