import React from "react";
import { FormattedMessage } from "react-intl";

// Components
import IconButton from "../../../components/icon-button/IconButton";
import TextButton from "../../../components/text-button/TextButton";

// Assets
import Logo from '../../../assets/svg/on_boarding/Logo.svg';
import BackIcon from '../../../assets/svg/icons/Back.svg';
import styles from "../on_boarding/OnBoarding.styles";


// Navigation constants
import { SCREENS } from "../../../navigation/constants";

export function preparePages( navigation, handleNextPage, handleBack ) {
    return [
        {
            id: 'intro-start',
            icon: <Logo />,
            title: (<FormattedMessage defaultMessage={"Odkryj Wszystko w Jednym Miejscu!"} id={'views.auth.on_boarding.title'} />),
            subTitle: (<FormattedMessage defaultMessage={"Rozpocznij swoją przygodę z turystyką, korzystając z najpopularniejszych i najprzydatniejszych aplikacji, które uczynią Twoją podróż niezapomnianą."} id={'views.auth.on_boarding.sub-title'} />),
            confirmButtonLabel: (<FormattedMessage defaultMessage={"Przejść do rejestracji"} id={'views.auth.on_boarding.get-started'}/>),
            confirmButtonAction: handleNextPage,
            action: (<TextButton 
                label={<FormattedMessage defaultMessage={"Pomiń"} id={'views.auth.on_boarding.skip'} />} 
                TextProps={{ style: styles.skipButton }} 
                onPress={() => navigation.navigate(SCREENS.AUTH.LOGIN.ID) }
                />),
            actionPosition: 'flex-end',
        },
        {
            id: 'activity-launched',
            icon: <Logo />,
            title: (<FormattedMessage defaultMessage={"Registration"} id={'views.auth.on_boarding.registration'} />),
            subTitle: (<FormattedMessage defaultMessage={"Rozpocznij swoją przygodę z turystyką, korzystając z najpopularniejszych i najprzydatniejszych aplikacji, które uczynią Twoją podróż niezapomnianą."} id={'views.auth.on_boarding.sub-title'} />),
            confirmButtonLabel: (<FormattedMessage defaultMessage={"Registration"} id={'views.auth.on_boarding.registration'}/>),
            confirmButtonAction: handleNextPage,
            action: <IconButton onPress={handleBack}><BackIcon /></IconButton>,
            actionPosition: 'flex-start',
        },
        {
            id: 'activity-running',
            icon: <Logo />,
            title: (<FormattedMessage defaultMessage={"Login"} id={'views.auth.on_boarding.logine'} />),
            subTitle: (<FormattedMessage defaultMessage={"Rozpocznij swoją przygodę z turystyką, korzystając z najpopularniejszych i najprzydatniejszych aplikacji, które uczynią Twoją podróż niezapomnianą."} id={'views.auth.on_boarding.sub-title'} />),
            confirmButtonLabel: (<FormattedMessage defaultMessage={"Login"} id={'views.auth.on_boarding.logine'}/>),
            confirmButtonAction: () => navigation.navigate(SCREENS.AUTH.SIGN_UP.ID),
            action: <IconButton onPress={handleBack}><BackIcon /></IconButton>,
            actionPosition: 'flex-start',
        },
    ];
}