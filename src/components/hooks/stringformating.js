import CryptoJS from "crypto-js";

const stringformating = (secretPass, text) => {
  const encrypt = () => {
    const data = CryptoJS.AES.encrypt(
      JSON.stringify(text),
      secretPass
    ).toString();

    return data;
  };

  const decrypt = () => {
    const bytes = CryptoJS.AES.decrypt(text, secretPass);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data;
  };
  return { encrypt, decrypt };
};

export default stringformating;
