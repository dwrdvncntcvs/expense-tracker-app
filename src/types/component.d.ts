type Column =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

type InputType =
    | "color"
    | "date"
    | "email"
    | "month"
    | "number"
    | "password"
    | "text"
    | "time";

type ButtonType = "button" | "submit";

type Color =
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "success"
    | "failure"
    | "warning"
    | "light"
    | "normal"

interface ColorClass {
    [key: string]: string;
}

type ButtonRound = Size | "xxl" | "xxxl" | "full";

type Width = Size | "full" | "none";

interface Dimension {
    width: Width;
    height: Width;
}

type Position = "start" | "center" | "end";

type FontWeight = "extralight" | "light" | "thin" | "normal" | "medium" | "semibold" | "bold" | "extrabold"

export {
    Column,
    Size,
    InputType,
    Color,
    ButtonType,
    ColorClass,
    Width,
    ButtonRound,
    Dimension,
    Position,
    FontWeight
};
