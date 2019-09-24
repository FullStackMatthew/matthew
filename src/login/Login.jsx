import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';

//Material-UI
import {
  TextField,
  Fab,
} from '@material-ui/core'

//Components
import LogoSVG from '../components/icons/LogoSVG';

const styles = {
  root: {
    height: "100vh",

  },
  pageBox: {
    width: '320px'
  },
  loginButton: {
    width: '100%'
  }

};

export default function Login(props) {
  return (
    <Suspense fallback="loading">
      <LoginComponent {...props} />
    </Suspense>
  );
}


function LoginComponent(props) {
  const { t } = useTranslation();

  const login = (values) => {
    props.history.push("/home");
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
      style={styles.root}>

      <Grid
        container
        direction="column"
        alignItems="center"
        style={styles.pageBox}>
        <div>
          <LogoSVG />
        </div>
        <h2>{t('login.title')}</h2>
        <p variant="body1" color="secondary">{t('login.welcome')}</p>

        <form noValidate>
          <TextField
            id="outlined-username-input"
            fullWidth
          label={t('Username')}
            type="username"
            name="username"
            autoComplete="username"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-adornment-password"
            fullWidth
            label={t('Password')}
            name="password"
            margin="normal"
            variant="outlined"
          />
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="login"
            type="button"
            autoComplete="current-password"
            style={styles.loginButton}
            onClick={login}
          >
            {t('Login')}
          </Fab>
        </form>
      </Grid>
    </Grid>
  )
}









// import React, {Suspense} from 'react';
// import {useTranslation} from 'react-i18next';

// export default function Login() {
//   return (
//     <Suspense fallback="loading">
//       <LoginComponent />
//     </Suspense>
//   );
// }


// function LoginComponent() {
//   const { t, i18n } = useTranslation(undefined, { useSuspence: false });

//   return (
//     <div className='preview'>
//       <h1>{t('title')}</h1>
//       <p>{t('figure.alt')} </p>
//       <p className='center'>{t('content')}</p>
//       <button onClick={() => i18n.changeLanguage('pt')}>pt-BR</button>
//       <button onClick={() => i18n.changeLanguage('en')}>en</button>
//     </div>
//   );

// }
