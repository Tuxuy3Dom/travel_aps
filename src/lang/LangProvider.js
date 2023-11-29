import React, {createContext, useContext, useState, useEffect} from 'react';
import {IntlProvider} from 'react-intl';


import { getMessages } from './utils';
import { LANGUAGES, LangContextName } from './constants';
import { getItem, setItem } from '../utils/asyncStorage';
import * as RNLocalize from 'react-native-localize';

export const LangContext = createContext();
LangContext.displayName = LangContextName;

const lc_lang_key = 'preferences:lang';

export function LangModeProvider(props) {
    const [lang, setLang] = useState(LANGUAGES.PL);

    useEffect(() => {
        (async function getLang() {
            const lcLang = await getItem(lc_lang_key);

            const bestLanguage = RNLocalize.findBestLanguageTag(
                Object.values(LANGUAGES)
            );

            if (lcLang) {
                setLang(lcLang);
            } else if(bestLanguage) {
                const {languageTag} = bestLanguage;
                setLang(languageTag);
            } else {
                setLang(LANGUAGES.ENG);
            }
        })();
    }, [lang]);

    /**
     *
     * @param {string} newLang 
     */ 
    async function switchLang(newLang){
        await setItem(lc_lang_key, newLang);
        setLang(newLang);
    }

    const value = [lang, switchLang];

    return <LangContext.Provider value={value} {...props}/>;
}

export default function LangWrapper({ children }) {
    const [lang] = useContext(LangContext);

    return (
    <IntlProvider locale={lang} defaultLocale={LANGUAGES.PL} messages={getMessages(lang)}>
        {children}
    </IntlProvider>
    );
}