import { bindActionCreators } from "redux";
import mockupDataNewest from "../../data/mockupDataNewest";

type Action = {
  type: string;
  number: number;
  name: string;
  address: string;
  phoneNumber: string;
  id: number;
};

export const mockupDataCategory = (
  state = mockupDataNewest,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
