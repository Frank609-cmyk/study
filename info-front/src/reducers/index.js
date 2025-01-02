// src/reducers/index.js
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import AccountReducer from './AccountReducer';
import EditModalReducer from './EditModalReducer';
import IpReducer from './IpReducer';
import EquipReducer from './EquipReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  account: AccountReducer,
  editModal: EditModalReducer,
  ip: IpReducer,
  equip: EquipReducer,
  userInfo: UserReducer,
});

export default rootReducer;
