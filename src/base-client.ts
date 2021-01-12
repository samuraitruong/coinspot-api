import axios from "axios";
import crypto from "crypto";

export class BaseClient {
  constructor(
    private apiKey: string,
    private apiSecret: string,
    public apiUrl: string
  ) {}

  calculateSign<T>(data: T) {
    const nonce = new Date().getTime();
    const postdata = { ...data, nonce };

    const stringmessage = JSON.stringify(postdata);
    const signedMessage = crypto.createHmac("sha512", this.apiSecret);

    signedMessage.update(Buffer.from(stringmessage));

    const sign = signedMessage.digest("hex");
    return {
      sign,
      postdata: stringmessage,
    };
  }

  async postRequest<T>(url: string, data: { [key: string]: any } = {}) {
    const { sign, postdata } = this.calculateSign(data);
    const headers = {
      key: this.apiKey,
      sign,
      "Content-Type": "application/json",
    };
    const apiUrl = `${this.apiUrl}/${url}`;
    try {
      const res = await axios.post<T>(apiUrl, postdata, {
        headers,
      });
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getRequest<T>(apiPath: string) {
    const res = await axios.get<T>(`${this.apiUrl}/${apiPath}`);
    return res.data;
  }
}
