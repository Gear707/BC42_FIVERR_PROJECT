import axiosClient from "./axioisClient";

export const apiSellerComment = async (MaCongViec) => {
  const { data } = await axiosClient.get(
    `binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`
  );
  return data;
};

export const apiPostComment = async (MaCongViec, comment) => {
  const { data } = await axiosClient.post(`binh-luan/${MaCongViec}`, comment);
  return data;
};
