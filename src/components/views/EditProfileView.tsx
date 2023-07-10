import {useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import Input from '../forms/Input';
import FormButton from '../forms/FormButton';
import {EditProfileViewProps, UserFormType} from '../../types';
import {
  hasSpecialCharacters,
  multiValidator,
  required,
  validateEmail,
} from '../../utils/validator';
import {UserProfile} from '../../models/UserProfile';
import UniversityApi from '../../api/UniversityApi';
import colors from '../../res/colors';

const initialValues = {
  name: '',
  email: '',
  bio: '',
};

const DEFAULT_IMAGE = 'https://www.bootdey.com/img/Content/avatar/avatar3.png';

const EditProfileView = (props: EditProfileViewProps) => {
  const {setUser} = props;
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: UserFormType) => {
      try {
        setLoading(true);
        const university = await UniversityApi.getUniversity();

        if (!university) {
          return;
        }

        const createdUser = new UserProfile(
          data.name,
          data.bio,
          university.name,
          data.email,
        );

        setLoading(false);
        setUser(createdUser);
      } catch (e: any) {
        Alert.alert(e.message || 'Something went wrong');
      }
    },
    [setUser],
  );

  const handleOnChangeAvatar = useCallback(() => {}, []);

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: DEFAULT_IMAGE,
            }}
          />
          <TouchableOpacity
            style={styles.changeAvatarButton}
            onPress={handleOnChangeAvatar}>
            <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Input
            label="Name"
            name="name"
            placeholder="Enter Name"
            validate={multiValidator(required, hasSpecialCharacters)}
          />
          <Input
            label="Email"
            name="email"
            placeholder="Enter Email"
            validate={validateEmail}
          />
          <Input
            label="Bio"
            name="bio"
            placeholder="Enter Bio"
            validate={required}
          />

          <FormButton loading={loading} />
        </View>
      </View>
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: colors.primary,
    fontSize: 18,
  },
});

export default EditProfileView;
