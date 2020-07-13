import RNFetchBlob from "rn-fetch-blob";

const upload = data => {
  return RNFetchBlob.fetch(
    "POST",
    "http://127.0.0.1:3000",
    {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      "Content-Type": "multipart/form-data"
    },
    data
  );
};

export default upload;
