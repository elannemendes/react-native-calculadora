import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  calculo: {
     flex: 2,
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'flex-end'
  },
  resultado: {
     flex: 1,
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'flex-end'
  },
  calculoTexto: {
     fontSize: 50,
     color: 'black'
  },
  resultadoTexto: {
     fontSize: 40,
     color: 'black'
  },
  botoes: {
     flex: 7,
     flexDirection: 'row'
  },
  botao: {
     flex: 1,
     alignItems: 'center',
     alignSelf: 'stretch',
     justifyContent: 'center'
  },
  botaoTexto: {
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    fontSize: 35,
    color: 'white'

  },
   opsTexto: {
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    fontSize: 30,
    fontWeight: 'bold-medium',
    color: '#00CED1'
  },
  numeros: {
     flex: 3,
     backgroundColor: '#333333'
  },
  operacoes: {
     flex: 1,
     justifyContent: 'space-around',
     alignItems: 'stretch',
     backgroundColor: '#333333',
     borderLeftColor: '#737373',
     borderLeftWidth: '1px'

  },
})