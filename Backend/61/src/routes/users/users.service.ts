import UserModel from '../../models/User';

async function list() {
  return UserModel.find({});
}

export default list;
