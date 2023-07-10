import {Button, StyleSheet, Text, View} from 'react-native';
import {useCallback} from 'react';
import {ProfileViewProps} from '../../types';
import colors from '../../res/colors';

export function ProfileView(props: ProfileViewProps) {
  const {user, setUser} = props;

  const handleReset = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>University: {user.getUserUniversity()}</Text>
      <Button title={'RESET'} onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    marginBottom: 20,
  },
});
