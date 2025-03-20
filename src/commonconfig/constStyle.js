
import { StyleSheet } from 'react-native';
import AppFonts from './AppFonts';


export const THEME_COLOR = '#EF7F2D';
export const LIGHT_THEME = 'rgba(239, 127, 45, .4)';


export const FONT_STYLES = {

  hb30: { fontFamily: AppFonts.monExtraBold, fontSize: 30, color: '#000', },
  hb22: { fontFamily: AppFonts.monExtraBold, fontSize: 22, color: '#000000', },
  hb20: { fontFamily: AppFonts.monExtraBold, fontSize: 20, color: '#000000', },
  hb18: { fontFamily: AppFonts.monExtraBold, fontSize: 18, color: '#000000', },
  hb16: { fontFamily: AppFonts.monExtraBold, fontSize: 16, color: '#000000', },
  hb14: { fontFamily: AppFonts.monExtraBold, fontSize: 14, color: '#000000', },
  hb13: { fontFamily: AppFonts.monExtraBold, fontSize: 13, color: '#000000', },
  hb11: { fontFamily: AppFonts.monExtraBold, fontSize: 11, color: '#000000', },

  hsb20: { fontFamily: AppFonts.monSemiBold, fontSize: 20, color: '#000000', },
  hsb16: { fontFamily: AppFonts.monSemiBold, fontSize: 16, color: '#000000', },
  hbs14: { fontFamily: AppFonts.monSemiBold, fontSize: 14, color: '#000', },
  hbs13: { fontFamily: AppFonts.monSemiBold, fontSize: 13, color: '#000000', },
  hbs12: { fontFamily: AppFonts.monSemiBold, fontSize: 12, color: '#000000', },
  hbs11: { fontFamily: AppFonts.monSemiBold, fontSize: 11, color: '#333131', },

  h30: { fontFamily: AppFonts.monLight, fontSize: 30, color: '#000000' },
  h20: { fontFamily: AppFonts.monLight, fontSize: 20, color: '#000' },
  h18: { fontFamily: AppFonts.monLight, fontSize: 18, color: '#000', },
  h17: { fontFamily: AppFonts.monLight, fontSize: 17, color: '#000000' },
  h15: { fontFamily: AppFonts.monLight, fontSize: 15, color: '#000000', },
  h14: { fontFamily: AppFonts.monLight, fontSize: 14, color: '#000', },
  h13: { fontFamily: AppFonts.monLight, fontSize: 13, color: '#000000' },
  h12: { fontFamily: AppFonts.monLight, fontSize: 12, color: '#000000' },
  h10: { fontFamily: AppFonts.monLight, fontSize: 10, color: '#000000' },
}
export const CSS_STYLES = StyleSheet.create({
  c1: { alignItems: 'center', justifyContent: 'center', },
  c2: { alignItems: 'center', justifyContent: 'space-between', },

  cf1: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  cf2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

  },

  i10: { height: 100, width: 100, resizeMode: 'contain' },
  i9: { height: 90, width: 90, resizeMode: 'contain' },
  i95: { height: 95, width: 95, resizeMode: 'contain' },
  i8: { height: 80, width: 80, resizeMode: 'contain', borderRadius: 50 },
  i85: { height: 85, width: 85, resizeMode: 'contain', borderRadius: 50 },
  i7: { height: 70, width: 70, resizeMode: 'contain', borderRadius: 50 },
  i6: { height: 60, width: 60, resizeMode: 'contain', borderRadius: 50 },
  i5: { height: 50, width: 50, resizeMode: 'contain', borderRadius: 50 },
  i55: { height: 55, width: 55, resizeMode: 'contain' },
  i4: { height: 40, width: 40, resizeMode: 'contain' },
  i45: { height: 45, width: 45, resizeMode: 'contain' },
  i3: { height: 30, width: 30, resizeMode: 'contain' },
  i35: { height: 35, width: 35, resizeMode: 'contain' },
  i2: { height: 20, width: 20, resizeMode: 'contain' },
  i25: { height: 25, width: 25, resizeMode: 'contain' },
  i15: { height: 15, width: 15, resizeMode: 'contain' },

  lineStyle: {
    borderBottomWidth: 1,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,.2)',
  },
  shadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    // shadowRadius: 1,
    elevation: 8,
  },

  cardContainer: {
    backgroundColor: '#EEF1F4',
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
  },
  // dropdown: {
  //   marginVertical: 5,
  //   borderWidth: 1,
  //   borderRadius: 30,
  //   paddingVertical: 8,
  //   paddingHorizontal: 20,
  //   borderColor: '#C5CDD5',

  // },
  dropdown: {
    // height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderColor: 'rgba(0,0,0,.2)',
    borderWidth: 1,

  },
  heading: {
    ...FONT_STYLES.h14,
    color: THEME_COLOR,
    marginTop: 10,
    marginBottom: 5
  },
});

