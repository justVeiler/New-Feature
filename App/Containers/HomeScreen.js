import React, {useEffect, useContext} from 'react';
import {ScrollView} from 'react-native';
import HomeScreenHeader from '../Components/HomeScreenHeader';
import HomeScreenSlide from '../Components/HomeScreenSlide';
import HomeScreenNews from '../Components/HomeScreenNews';
import {AppContext} from '../Providers/AppProvider';

export default function HomeScreen() {
    const {loadSavedImages} = useContext(AppContext);
    useEffect(() => {
        try {
            (async function () {
                console.log("LOAD");
                await loadSavedImages();
            })();
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <HomeScreenHeader/>
            <HomeScreenSlide/>
            <HomeScreenNews/>
        </ScrollView>
    );
}
