import { createStyles, makeStyles } from '@material-ui/core/styles';

import { colors } from '../../common/theme/colors';

export const styles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 1000,
      margin: 'auto'
    },
    centerify: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center'
    },
    card: {
      maxWidth: 400,
      maxHeight: 400,
      border: '3px solid',
      borderColor: colors.darkGold,
      padding: 12,
      margin: 12
    }
  })
);
