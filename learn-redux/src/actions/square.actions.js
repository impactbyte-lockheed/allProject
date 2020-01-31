export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const LUAS = "LUAS";
export const KELILING = "KELILING";

export const addCount = () => {
  return {
    type: INCREMENT
  };
};

export const minusCount = () => {
  return {
    type: DECREMENT
  };
};

export const hitungLuas = () => {
  return {
    type: LUAS
  };
};

export const hitungKeliling = () => {
  return {
    type: KELILING
  };
};
