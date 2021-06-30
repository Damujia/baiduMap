import { get } from './axios.js'
export default {
  selectTVLineRow1Left (data) {
    return get('selectTVLineRow1Left', data)
  },
  selectOneEnvRow1Mid (data) {
    return get('selectOneEnvRow1Mid', data)
  },
  selectAllEnvRow1Mid (data) {
    return get('selectAllEnvRow1Mid', data)
  },
  selectOrderNumRow2Left (data) {
    return get('selectOrderNumRow2Left', data)
  },
  selectBySiteIdDayRow2Mid1 (data) {
    return get('selectBySiteIdDayRow2Mid1', data)
  },
  selectBySiteIdMonthRow2Mid2 (data) {
    return get('selectBySiteIdMonthRow2Mid2', data)
  },
  getSafe (data) {
    return get('getSafe', data)
  },
  selectTVLineRow1Right (data) {
    return get('selectTVLineRow1Right', data)
  },
  selectRow3TVDevice (data) {
    return get('selectRow3TVDevice', data)
  },
  selectTV1Row4LeftTVDevice (data) {
    return get('selectTV1Row4LeftTVDevice', data)
  },
  selectDeviceStateTVDevice (data) {
    return get('selectDeviceStateTVDevice', data)
  },
  selectDeviceInfoTVDevice (data) {
    return get('selectDeviceInfoTVDevice', data)
  },
  selectCountArgsTVDevice (data) {
    return get('selectCountArgsTVDevice', data)
  },
  selectTV1Row4RightTVDevice (data) {
    return get('selectTV1Row4RightTVDevice', data)
  },
  selectTVLineRow1Right2 (data) {
    return get('selectTVLineRow1Right2', data)
  },

}
