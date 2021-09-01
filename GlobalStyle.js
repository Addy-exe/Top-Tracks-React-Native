import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#333',
        alignItems: 'center',
      },
    
      imagestyle : {
        position: 'relative',
        top: 70,
        width: 400,
        height: 400
      },
    
      apptitle: {
        fontSize: 50,
        color: 'white',
        fontFamily: 'Pacifico-Regular'
      },

      fetchContainer: {
        flex: 1,
        backgroundColor: '#333'
      },

      childContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      },

      inputStyle: {
        width: 280,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        top: 10,
        color: 'white'
      },

      btnStyle: {
        width: 40,
        height: 30,
        backgroundColor: 'white',
        top: 10,
        borderRadius: 8,
        alignItems: 'center'
      },

      itemStyle: {
        height: 40,
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        padding: 5, 
        margin: 4,
        borderRadius: 12
      },

      listview: {
        top: 50,
        margin: 12
      }
})

export default globalStyle;