import { Dimensions, PixelRatio } from 'react-native';

const WIDTH_WINDOW = Dimensions.get('window').width;

const BASE_WIDTH = 375;

/**
 * 
 * @param {number} size
 */

export function scaleSize(size){
    return (WIDTH_WINDOW / BASE_WIDTH) * size;
}

/**
 * 
 * @param {number} size 
 */ 

export function scaleFont(size){
    // used dedication method in PixelRatio
    return size * PixelRatio.getFontScale();
}

// function for padding
function dimensions(top, right = top, bottom = top, left = right, property){
    const styles = {}

    styles[`${property}Top`] = top;
    styles[`${property}Right`] = right;
    styles[`${property}Bottom`] = bottom;
    styles[`${property}Left`] = left;

    return styles;
}

export function margin(top, right, bottom, left){
    return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left){
    return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color, offset = {heigth: 2, width: 2}, radius: 8, opacity: 0.2){
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    } 
}