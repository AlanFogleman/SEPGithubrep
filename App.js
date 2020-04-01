import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';

export default class App extends Component {
  state = {
    searchInput:'',clearInput:false
  }
  constructor(props) {
    super(props);
    
    this.state = {
      studentID: '',
      studnetName: '',
      major: '',
      goal: ''
    };
  }
  
  clearText(){
    this.setState({text:''})
                }
  
  onLogin() {
    const { studentID, studentName, major, goal } = this.state;

    Alert.alert('Thank you for taking this survey!', `${studentName}`);
  }

  onRetrieve() {
    const { studentID, studentName, major, goal } = this.state;

    Alert.alert('Your data is now retrived. Thank you, and have a nice day!', `${studentName}`);
  }



  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.text}
          onSubmitEditing={()=>{
            this.setState({
              clearInput:!this.stateclearInput,
            })
            }}
          onChangeText={(studentID) => this.setState({ studentID })}
          placeholder={'Please Enter your Student ID'}
          style={styles.input}
        />
        <TextInput
          value={this.state.text}
          onSubmitEditing={()=>{
            this.setState({
              clearInput:!this.stateclearInput,
            })
          }}
          onChangeText={(studentName) => this.setState({ studentName })}
          placeholder={'Please Enter your Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.text}
          onSubmitEditing={()=>{
            this.setState({
              clearInput:!this.stateclearInput,
            })
          }}
          onChangeText={(major) => this.setState({ major })}
          placeholder={'Please Enter your Major'}
          style={styles.input}
        />
        <TextInput
          value={this.state.text}
          onSubmitEditing={()=>{
            this.setState({
              clearInput:!this.stateclearInput,
            })
          }}
          onChangeText={(goal) => this.setState({ goal })}
          placeholder={'Please Explain your Goal'}
          style={styles.input}
        />
        <Button
          title={'Submit survey'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
        <Button
          title={'Retrieve Student Data'}
          style={styles.input}
          onPress={this.onRetrieve.bind(this)}
        />
        <Button
          title={'Clear Text'}
          onPress={()=>this.clearText()}
        />
        <Text>When you complete this form, press 'Clear Text'. Be</Text> 
        <Text>sure to reset the app so another student may use it.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 300,
    height: 100,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  
});

//I credit snack.expo.io webpage  for my code
