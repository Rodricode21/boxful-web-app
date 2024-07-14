import { Http } from "./Http";

export default {
  createPackage(body: any) {
    return Http.post(`/packages`, body);
  },
};
