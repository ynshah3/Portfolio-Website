import { makeStyles } from "@material-ui/styles";

import { colors } from "../../common/theme/colors";

export const styles = makeStyles({
  greeting: {
    fontFamily: 'Cedarville Cursive',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 50
  },
  footer: {
    backgroundColor: colors.lightGold,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footerSmall: {
    backgroundColor: colors.lightGold,
    padding: 20,
    width: '100%'
  },
  root: {
    display: 'flex',
    backgroundColor: colors.white,
    minHeight: '100vh'
  },
  appBar: {
    width: '100%',
    backgroundColor: colors.white
  },
  title: {
    flexGrow: 1
  },
  socials: {
    width: 300,
    marginTop: 50
  },
  dock: {
    width: 1000,
    marginTop: 30
  },
  link: {
    color: colors.darkestGold,
    '&:hover': {
      color: colors.black,
      textDecoration: 'none'
    }
  },
  centerify: {
    textAlign: 'center'
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  copyright: {
    marginTop: 50,
    color: colors.darkestGold
  }
});
