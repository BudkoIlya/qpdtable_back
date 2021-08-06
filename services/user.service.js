import * as UserRepository from "../repositories/user.repository";

export const getLines = async () => {
  try {
    return await UserRepository.getLine();
  } catch (err) {}
};
export const deleteLine = async (id) => {
  try {
    return await UserRepository.deleteLine(id);
  } catch (err) {
    throw err;
  }
};
export const updateLine = async (id, name, value) => {
  try {
    return await UserRepository.updateLine(id, name, value);
  } catch (err) {
    throw err;
  }
};
export const createLine = async (name, value) => {
  try {
    return UserRepository.createLine(name, value);
  } catch (err) {
    throw err;
  }
};
