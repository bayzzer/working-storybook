/// <reference types="react" />
import './label.css';
export interface ILabel {
    /**
     * The text to display in the label.
     */
    text: string;
    /**
     * The size of the label.
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * To UPPER CASE or not.
    */
    upper?: boolean;
    /**
     * Color of the label.
     */
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    customColor?: string;
}
export declare const Label: ({ text, size, upper, color, customColor }: ILabel) => JSX.Element;
