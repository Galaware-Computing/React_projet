import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, data, renderItem, showDialog, showDialogM, showDialogR, Dialog, Alert } from 'react-native';
import ReactDOM from "react-dom";
import Constants from 'expo-constants';
import {} from 'expo-status-bar';



const App = () => {


    return ( <
        View style = { styles.principal } >


        <
        View style = { styles.header } >
        <
        Text style = { styles.title } > Projet SJP5 < /Text> <
        /View>

        <
        View style = { styles.body } >

        <
        View style = { styles.left } >
        <
        View style = {
            [styles.textContent, { borderColor: 'green', }] } >

        <
        /View>

        <
        View style = { styles.btnContent } >

        <
        View style = { styles.btnView } >

        <
        TouchableOpacity onPress = {
            () => Alert.alert('Hello, world!') } >
        <
        Text style = {
            { fontSize: 50, color: 'gray' } } > + < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = { styles.btnView } >


        <
        TouchableOpacity onPress = {
            () => Alert.alert('Hello, world!') } >
        <
        Text style = {
            { fontSize: 50, color: 'gray' } } > m < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = { styles.btnView } >


        <
        TouchableOpacity onPress = {
            () => Alert.alert('Hello') } >
        <
        Text style = {
            { fontSize: 50, color: 'gray' } } > - < /Text> <
        /TouchableOpacity> <
        /View> <
        /View> <
        /View>

        <
        View style = { styles.center } >

        <
        View style = { styles.centerBtnView1 } >

        <
        TouchableOpacity onPress = {
            () => Alert.alert('Hello') } >
        <
        Text style = {
            { fontSize: 30, color: 'gray' } } > { ">>" } < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = { styles.centerBtnView2 } >

        <
        TouchableOpacity onPress = {
            () => Alert.alert('Hello') } >
        <
        Text style = {
            { fontSize: 30, color: 'gray' } } > { "<<" } < /Text> <
        /TouchableOpacity> <
        /View>

        <
        /View>

        <
        View style = { styles.right } >

        <
        View style = {
            [styles.textContent, { borderColor: 'darkorange', }, styles.flatListContainer] } >



        <
        FlatList data = { data }
        renderItem = { renderItem }
        /> <
        /View>

        <
        View style = { styles.btnContent } >


        <
        View style = { styles.btnView } >

        <
        TouchableOpacity onPress = { showDialog } >
        <
        Text style = {
            { fontSize: 50, color: 'gray' } } > + < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = { styles.btnView } >

        <
        TouchableOpacity onPress = { showDialogM } >
        <
        Text style = {
            { fontSize: 50, color: 'gray' } } > m < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = { styles.btnView } >

        <
        TouchableOpacity onPress = { showDialogR } >
        <
        Text style = {
            { fontSize: 50, color: 'gray' } } > - < /Text> <
        /TouchableOpacity> <
        /View>

        <
        /View> <
        /View> <
        /View>

        <
        /View>
    );
}



const styles = StyleSheet.create({

    principal: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'whitesmoke',
        flexDirection: "column"
    },

    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        borderWidth: 3,
        paddingLeft: 20,
        paddingRight: 20,
    },

    body: {
        flex: 8,
        flexDirection: "row",
    },
    right: {
        flex: 5,
    },
    center: {
        flex: 1.5,
    },
    left: {
        flex: 5,
    },


    textContent: {
        flex: 8,

        borderWidth: 2,
    },
    btnContent: {
        flex: 1,
        marginTop: 1,
        flexDirection: 'row'
    },
    btnView: {
        flex: 1,
        borderWidth: 1,
        margin: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: -10,
    },
    centerBtnView1: {
        borderWidth: 1,
        margin: 1,
        marginTop: 200,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: -10,
    },
    centerBtnView2: {
        borderWidth: 1,
        margin: 1,
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: -10,
    },

});

export default App;