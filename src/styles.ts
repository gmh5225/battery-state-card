import { css } from "./lit-element";

const styles = css`
.battery {
    display: flex;
    line-height: 40px;
}
.battery .name {
    flex: 1 0 60px;
    margin-left: 16px;
}
.battery .icon {
    flex: 0 0 40px;
    border-radius: 50%;
    text-align: center;
}


.expand {
    display: none;
}
.expand + label {
    display: block;
    text-align: right;
    cursor: pointer;
}
.expand + label > div {
    display: inline-block;
    transform: rotate(-90deg);
    font-size: 26px;
    height: 29px;
    width: 29px;
    text-align: center;
}
.expand + label > div,
.expand + label + div {
    transition: 0.5s ease-in-out;
}
.expand:checked + label > div {
    transform: rotate(-90deg) scaleX(-1);
}
.expand + label + div {
    max-height: 0;
    overflow: hidden;
}
.expand:checked + label + div {
    max-height: 1000px;
}
`;

export default styles;