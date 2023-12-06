import React, {useState} from "react";
import { View, Text, ImageBackground, Image } from "react-native";

import CustomButton from "../../../components/button/CustomButton";
import Pagination from "../../../components/pagination/Pagination";

import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./OnBoarding.styles";
import { preparePages } from "./helpers";

import DefaultBackground from '../../../assets/images/backMainScreen.jpg';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultBackground).uri;
// const back_image = {uri: 'https://img.freepik.com/free-vector/green-neon-synthwave-patterned-social-story-template-vector_53876-173387.jpg?w=740&t=st=1701870722~exp=1701871322~hmac=ca219cf39a94a533110802ac51b1da3be9bff05469d45c743c2f294587d90631'};
const back_image = {uri: DEFAULT_IMAGE};


function Panel({ id, icon, title, subTitle, confirmButtonLabel, confirmButtonAction, action, actionPosition, page, pages}) {
    return (
    <>
        <View style={[styles.actionContainer, {alignItems: actionPosition}]}>{action}</View>
        
        {/* <View style={styles.iconContainer}>{icon}</View> */}
        
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
    <ImageBackground source={back_image} resizeMode='cover'>
        <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Panel page={page} pages={pages} {...pages[page]} />
                </View> 
            
        </SafeAreaView>
    </ImageBackground>
    );
}