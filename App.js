import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { estilos } from './components/Estilos';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      calculoTexto: "",
      visorTexto: ""
    }
    this.operacoes = ['⌫', '÷', '×', '–', '+']
  }

    onClick = (botao) => {

        if (botao == '='){
            this.calcularResultado()
        }

        else if (botao == '+' || botao == '–' || botao == '×' || botao == '÷' ) {

          const lastChar = this.state.calculoTexto.split('').pop()
          if(this.operacoes.indexOf(lastChar) > 0) return
            if(this.state.texto == "") return
            this.setState({
              visorTexto: this.state.visorTexto + botao
            })
            if (botao == '–') botao = '-'
            if (botao == '×') botao = '*'
            if (botao == '÷') botao = '/'
            this.setState({
              calculoTexto: this.state.calculoTexto + botao
              
            })
        }

        else if (botao == 'C'){
            this.limpar()
        }

        else if(botao == '⌫'){
            console.log(this.state.visorTexto)
            const texto = this.state.visorTexto.split('')
            texto.pop()
            this.setState({
              visorTexto: texto.join(''),
              resultadoTexto: ""
            })
        }

        else {
            this.setState({
                visorTexto: this.state.visorTexto + botao,
                calculoTexto: this.state.calculoTexto + botao
            })
        }
    };

    limpar (){
        this.setState ({
          visorTexto: "",
          calculoTexto: "",
          resultadoTexto: ""
        })
    }
   

  calcularResultado = () => {
      var checkResult = ''
        if(this.state.calculoTexto.includes('--')){
            checkResult = this.state.calculoTexto.replace('--','+')
        }

        else {
            checkResult = this.state.calculoTexto
        }

        try {
            this.setState({
                // eslint-disable-next-line
                resultadoTexto: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                resultadoTexto: "error"
            })

        }
  };
 

  render() {
    let nums = []
    let numeros = [['(', ')', 'C'], [1, 2, 3], [4, 5, 6], [7, 8, 9], [0, ',', '=']]
    for (let i=0; i<5; i++) {
        let num = []
        for (let j=0; j<3; j++) {
          num.push(<TouchableOpacity onClick={e => this.onClick(numeros[i][j])} style={estilos.botao}>
            <Text style={estilos.botaoTexto}>{numeros[i][j]}</Text>
          </TouchableOpacity>)
        }
         nums.push(<View key={i} style={estilos.row}>{num}</View>)
    }

      let ops = []
      for (let i=0; i<5; i++) {
        ops.push(<TouchableOpacity onClick={e => this.onClick(this.operacoes[i])} style={estilos.botao}>
            <Text style={[estilos.opsTexto]}>{this.operacoes[i]}</Text>
            </TouchableOpacity>)
      }
      

return (    
      <View style={estilos.container}>
        <View style={estilos.calculo}>
          <Text style={estilos.calculoTexto}>{this.state.visorTexto}</Text>
        </View>
        <View style={estilos.resultado}>
          <Text style={estilos.resultadoTexto}>{this.state.resultadoTexto}</Text>
        </View>
        <View style={estilos.botoes}>
          <View style={estilos.numeros}>
            {nums}
          </View>
          <View style={estilos.operacoes}>
            {ops}
          </View>
        </View>
      </View>
    );
  
  }

}

  /*⌫
  calcularResultado() {
    const texto = this.state.calculoTexto
    this.setState({
      resultadoTexto: eval(texto)
    })
  }

  validate(){
    const text = this.state.calculoTexto
    switch(text.slice(-1)) {
      case '+':
      case '–':
      case '×':
      case '÷':
        return false
    }
    return true
  }*/

  
    /*
      limpar (botao){
      if (botao == '⌫'){
        this.setState ({
          calculoTexto: ""
        })
      }
    }
    
    else if (botao == '+' || botao == '–' || botao == '×' || botao == '÷' ) {
          const lastChar = this.state.calculoTexto.split('').pop()
          if(this.operacoes.indexOf(lastChar) > 0) return
            if(this.state.texto == "") return
            this.setState({
              calculoTexto: this.state.calculoTexto + botao
            })
        }

  botaoPress(texto) {
   // console.log(texto)

    if(texto == '=') {
      return this.calcularResultado()
    }

    this.setState({
      calculoTexto: this.state.calculoTexto+texto
    })
  }

  


  
  calcular(operacoes) {

    switch (operacoes){
      case '⌫': 
        console.log(this.state.calculoTexto)
        const texto = this.state.calculoTexto.split('')
        texto.pop()
        this.setState({
          calculoTexto: texto.join('')
        })
        break
        case '+':
        case '–':
        case '×':
        case '÷':
          const lastChar = this.state.calculoTexto.split('').pop()
          if(this.operacoes.indexOf(lastChar) > 0) return
            if(this.state.texto == "") return
            this.setState({
              calculoTexto: this.state.calculoTexto + operacoes
            })

    }
  }*/