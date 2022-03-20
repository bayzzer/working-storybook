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
import { Label } from "../../components/Label";
export default {
    title: 'UI/Label',
    component: Label,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        customColor: { control: 'color' }
    }
};
var Tenmplate = function (args) { return _jsx(Label, __assign({}, args)); };
export var Default = Tenmplate.bind({});
Default.args = {
    text: 'Hello World',
    size: 'normal',
};
export var Basic = Tenmplate.bind({});
Basic.args = {
    text: 'Basic',
    size: 'h1',
};
