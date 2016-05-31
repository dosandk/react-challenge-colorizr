export default function brightness(color) {
    let result = '#ffffff';

    const c = color.substring(1);  // strip #
    const rgb = parseInt(c, 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >>  8) & 0xff;  // extract green
    const b = (rgb >>  0) & 0xff;  // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // 0 - 255 per ITU-R BT.709

    if (luma > 127) {
        result = '#000000';
    }

    return result;
}