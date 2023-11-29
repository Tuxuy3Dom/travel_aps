import React, {useState} from "react";
import { View, Text } from "react-native";

import CustomButton from "../../../components/button/CustomButton";
import Pagination from "../../../components/pagination/Pagination";

import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./OnBoarding.styles";
import { preparePages } from "./helpers";

function Panel({ id, icon, title, subTitle, confirmButtonLabel, confirmButtonAction, action, actionPosition, page, pages}) {
    return (
    <>
        <View style={[styles.actionContainer, {alignItems: actionPosition}]}>{action}</View>
        
        <View style={styles.iconContainer}>{icon}</View>
        
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        
        <Pagination pages={pages} activePage={page} />
        
        <View>
            <CustomButton label={confirmButtonLabel} onPress={confirmButtonAction}/>
        </View>
    </>);
}

export default function onBoarding({ navigation }) {

    const [page, setPage] = useState(0);

    function handleNextPage() {
        setPage((prevPage) => prevPage + 1);
    }

    function handleBack() {
        setPage((prevPage) => prevPage - 1);
    }
 
    const pages = preparePages(navigation, handleNextPage, handleBack);

    return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            <Panel page={page} pages={pages} {...pages[page]} />
        </View> 
    </SafeAreaView>
    );
}