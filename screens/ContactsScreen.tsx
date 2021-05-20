import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import Users from '../data/Users'
import ContactListItem from "../components/ContactListItem";

export default function ContactsScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={Users}
                renderItem={({item, index}) => <ContactListItem user={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});