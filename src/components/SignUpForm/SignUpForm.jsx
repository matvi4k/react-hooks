import styles from './SignUpForm.module.css'


function SignUpForm(){
  return(
    class OldSignupForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <span>Пошта</span>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

<label className={styles.label}>
  <span>Пароль</span>
  <input
    type="password"
    name="password"
    onChange={this.handleChange}
    value={this.state.password}
  />
</label>

        <button type="submit">Зареєструватись</button>
      </form>
    );
  }
}
  )
}