# React Native

`create-react-native-app` - Creates React Native Application // Similar to `create-react-app`.

## Componenets

* `View` - Like a <div> in HTML // used to style components. Wrap everything in a view!

## Notes

* Cannot use CSS, but can use a library like `Styled-Components` or `CSStoReactNative`?
* All text must be wrapped in `Text` tags.
* Most of the layout is in `Flexbox`.
* `<View style={styles.container}>` gives you the styles from your `const styles`.
* Command-D will bring up the developer settings on iOS simulator; On Android shaking your phone will bring it up.
* Buttons are different from regular JavaScript.
* Command-R will force a reload on the simulator.
* `style={styles.input}` will base it's style off the `input:` under the `const styles`.
* `tasks: tasks.slice().push(todo)` - React likes immutable data structures, so you are creating a new task and then pushing it onto the array.

## Code

```JS
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text> Text Here </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
```

```JS
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';

const TodoForm = (props) => {
  return(
    <View>
      <TextInput style={styles.input}
      value={props.text}
      placeholder="Enter Todo"
      onChangeText={props.onChange}
      />
    </View>
  );
};

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      text: '',
      todo: {}
    };
  }

  handleChange = (e) => {
    console.log(e)
    const text = e
    this.setState({ text })
  }

  handlePress = () => {
    const todo = { todo: this.state.text };
    const tasks = this.state.tasks.slice();
    tasks.push(todo);

    this.setState({ text: '', tasks: tasks })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text> Text Here </Text>
        <TodoForm text={this.state.text} onChange={() => this.handleChange()} />
        <Button title="Submit" onPress={this.handlePress}/>
        <FlatList
          data={this.state.tasks}
          keyExtractor={(item, index) => item.index} // key extractor function
          renderItem={ ({ item }) => {
             return <Text>{item.todo}</Text>}
            }
         />
      </View> // This is broken, don't use it as reference.
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 60,
  },
});
```
