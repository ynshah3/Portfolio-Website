import { createStyles, makeStyles } from '@material-ui/core/styles';

import { colors } from '../../common/theme/colors';

export const styles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 500,
      margin: 'auto',
      flexGrow: 1,
      flexDirection: 'column',
      border: '2px solid ',
      borderColor: colors.darkGold
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: 100,
      backgroundColor: colors.lightGold
    },
    centerify: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center'
    },
    lightGold: {
      backgroundColor: colors.lightGold
    }
  })
);
