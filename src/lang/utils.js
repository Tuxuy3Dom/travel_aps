import PL from './dictionaries/pl.json';
import EN from './dictionaries/en.json';

import { LANGUAGES } from './constants';

/**
 *
 * @param {string} lang
 */ 
export function getMessages(lang){
    switch(lang) {
        case LANGUAGES.ENG: {
            return EN;
        }
        case LANGUAGES.PL: {
            return PL;
        }
        default: {
            return LANGUAGES.PL;
        } 
    }
}