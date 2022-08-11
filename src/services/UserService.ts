class UserService {
  private url = '/api';

  public async refreshToken() {
    const tokenJwt = localStorage.getItem('tokenJwt');
    console.log('refreshToken:');

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ tokenJwt, api: this.url });
      }, 2000);
    });

    return response;
  }
}

export default new UserService();
