import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react'

const bruschettaPic = require('./assets/bruschetta.png');

function HomeScreen({ navigation }) {
  const [numberOfServings, setNumberOfServings] = useState('');
  return (
    <View style={styles.HomeScreen}>
      <Text style={styles.title}>Bruschetta Recipe</Text>
      <View>
          <Image source={bruschettaPic} style={styles.bruschetta} />
        </View>
      <TextInput 
        style={styles.input}
        value={numberOfServings}
        onChangeText={(newServing) => setNumberOfServings(newServing)}
        placeholder={'Enter the Number of Servings'}></TextInput>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Recipe', {quantity: numberOfServings})}>
        <Text style={styles.buttonText}>View Recipe</Text>
      </TouchableOpacity>
    </View>
  );
}

function RecipeScreen({route}) {
  const {quantity} = route.params;
  var tomatoes = quantity*4
  var basil = quantity*6
  var garlic = quantity*3
  var oil = quantity*3
  return (
    <View style={styles.RecipieScreen}>
      <Text style={styles.recipeTitle}>Bruschetta</Text>
      <View>
        <Text style={styles.ingredientsTitle}>{'\t'}Ingredients</Text>
      </View>
      <View style={styles.space}>
        <Text style={styles.ingredients}>{'\t'}{'\t'}{tomatoes} plum tomatoes</Text>
        <Text style={styles.ingredients}>{'\t'}{'\t'}{basil} basil leaves</Text>
        <Text style={styles.ingredients}>{'\t'}{'\t'}{garlic} garlic cloves, chopped</Text>
        <Text style={styles.ingredients}>{'\t'}{'\t'}{oil} TB olive oil</Text>
      </View>
      
      <View>
        <Text style={styles.ingredientsTitle}>{'\t'}Directions</Text>
      </View>
      <View>
        <Text style={styles.ingredients}>{'\t'}{'\t'}Combine the ingredients</Text>
        <Text style={styles.ingredients}>{'\t'}{'\t'}{basil}add salt to taste. Top</Text>
        <Text style={styles.ingredients}>{'\t'}{'\t'}{garlic}french bread slices with</Text>
        <Text style={styles.ingredients}>{'\t'}{'\t'}{oil}mixture</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Healthy Recipes" 
          component={HomeScreen} 
          options={{ headerStyle: {backgroundColor: '#f4511e'}, headerTintColor: '#fff' }}/>
        <Stack.Screen 
          name="Recipe" 
          component={RecipeScreen} 
          options={{ title: '', headerStyle: {backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerBackTitle: 'Healthy Recipes' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeScreen : {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  RecipieScreen : {
    flex: 1, 
    marginTop: 150
  },
  title: {
    fontSize: 45,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: 175,
    marginBottom: 20,
    width: 350,
    fontSize: 25,
    textAlign: 'center'
  },
  button: {
    backgroundColor: "#8e8e8e",
    padding: 15,
    borderRadius: 5,
    marginBottom: 50,
    width: 200
  },
  buttonText: {
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  bruschetta: {
    marginBottom: 30,
  },
  recipeTitle: {
    fontSize: 45,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  ingredientsTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  ingredients: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  space: {
    marginBottom: 30
  }
});