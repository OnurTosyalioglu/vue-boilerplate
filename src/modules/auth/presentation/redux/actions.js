// import AuthService from '../../application/service/auth.service'

export default {
  singInWithEmailAndPassword: (
    { commit, state },
    { email, password }
  ) => {
		return new Promise((resolve, reject) => 
		{
			console.log('test')
			commit('loading')		
		});
  },
  createUserWithEmailAndPassword: (
    { commit, state },
    { email, password }
  ) => {
    return new Promise((resolve, reject) =>
		{
		
		});
  },
	singInWithFacebook: ({ commit, state }) => 
	{
		return new Promise((resolve, reject) =>
		{
		
		});
  },
  singInWithGoogle: ({ commit, state }) => {
		return new Promise((resolve, reject) => 
		{

		});
  },
  sendPasswordResetEmail: ({ email }) => {
		return new Promise((resolve, reject) => 
		{

		});
  },
  confirmPassword: (
    { commit, state },
    { oobCode, password }
  ) => {
		return new Promise((resolve, reject) => 
		{
		
		});
  },
  signout: ({ commit, state }) => {
		return new Promise((resolve, reject) => 
		{

		});
  },
};
