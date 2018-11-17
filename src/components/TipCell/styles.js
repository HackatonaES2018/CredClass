import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    listItem: {
        padding: 5,
        backgroundColor: "#f1f1f1",
        height: 85,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
        elevation: 2
      },
    
      test: {
        height: 35,
      },
    
      imageProfessor:{
        height: 65,
        width: 65,
        borderRadius: 5,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#fff',
      },

      celulaDetalhes:{
          marginRight: 10,
          marginBottom: 10,
      },
    
      linhaNomeStars: {
        flexDirection: 'row',
        marginLeft: 10,
        paddingRight: 30,
      },

      nomeView: {
      },

      detalhesView: {
        height: 10,
        marginLeft: 10,
        paddingBottom: 10,
      },

      starsIcone:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: 10
      },

      starElement:{
        marginRight: 2
      },
    
      titleRecipe: {
        fontSize: 16,
        color: "yellow",
      },
    
      costRecipe: {
        marginBottom: 30,
        fontSize: 13,
        color: '#fff',
      },    

});

export default styles;