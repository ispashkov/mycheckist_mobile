import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Alert,
  Dimensions,
} from 'react-native';
import {
  Input,
  Button,
  withTheme,
  ThemeProps,
  FullTheme,
} from 'react-native-elements';
import theme from '../../theme';

interface IState {
  name: string;
  target: string;
}

class Proposal extends Component<ThemeProps<FullTheme>, IState> {
  static readonly navigationOptions = {
    title: 'Создание заявки',
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTintColor: 'white',
  };

  readonly state = {
    name: '',
    target: '',
  };

  public handleChange = (key: keyof IState) => (text: string): void => {
    this.setState({
      [key]: text,
    } as Pick<IState, keyof IState>);
  };

  public handleSubmit = (): void => {
    Alert.alert('Текущее состояние формы', JSON.stringify(this.state));
  };

  render(): JSX.Element {
    const {name, target} = this.state;

    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.view}>
            <Input
              label="Название заявки"
              value={name}
              onChangeText={this.handleChange('name')}
              placeholder="Название заявки"
            />

            <Input
              value={target}
              onChangeText={this.handleChange('target')}
              label="Исполнитель"
              placeholder="Исполнитель"
            />

            <Button
              style={styles.btnSubmit}
              onPress={this.handleSubmit}
              title="Создать"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
  },
  btnSubmit: {
    flex: 1,
    width: Dimensions.get('screen').width - 16,
  },
});

export default withTheme(Proposal);
