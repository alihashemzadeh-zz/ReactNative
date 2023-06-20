import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    list: {
        width: "100%"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 25,
        margin: 2,
        borderWidth: 2,
        padding: 10
    },
    text: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold"
    },
    listItem: {
        padding: 5,
        borderWidth: 1,
        borderColor: "blue",
        width: '100%'
    },
    desingCircle1:{
        position:"absolute",
        top:-34,
        right:-122,
        width: 263,
        height: 266,
        borderRadius: 130,        
        backgroundColor: "rgba(68, 196, 173, 0.42)"
      },
    desingCircle2:{
        position:"absolute",
        width:263,height:266,
        right:-26,
        top:-149,
        borderRadius:132,
        backgroundColor:"rgba(68, 196, 173, 0.42)"},
    button1:{
        width: 308,
        height: 55,
        backgroundColor: "#498A7E",
        color:"#ffffff",
        fontStyle: "normal",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        lineHeight:55,
    },
    textBox:{
        marginTop:15,
        width: 380,
        height: 55,
        backgroundColor: "#FFFFFF",
        border: [1, "solid","rgba(77, 94, 84, 0.3)"],
        borderRadius: 25,
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 24,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "rgba(0, 0, 0, 0.4)"
      }
});