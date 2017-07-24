//the reason for defining the file in: module > shared > redux is because we don't define actions and reducers necessarily for a specific component. Instead we define them for parts of the module, it could be a combination of different components.

export const addNameToTitleType = "addNameToTitleType";
export const addNumberToTitleType = "addNumberToTitleType";

export const addNameToTitle = () => {
    return {
        type: addNameToTitleType
    };
};

export const addNumberToTitle = () => {
  return {
      type: addNumberToTitleType
  };
};
