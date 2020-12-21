import axios from "axios";
import qs from "qs";
import { HistoryRequest } from './types';
import crypto from 'crypto';

export class BaseClient {
  constructor(private apiKey: string, private apiSecret: string, public apiUrl: string) {

  }
  
  calculateSign(data: any) {
    
    const nonce = new Date().getTime();
    const postdata = { ...data, nonce };

    var stringmessage = JSON.stringify(postdata);
		var signedMessage = crypto.createHmac("sha512", this.apiSecret);

		signedMessage.update(Buffer.from(stringmessage));

    var sign = signedMessage.digest('hex');
    return {
      sign, postdata:stringmessage
    }
  }
  
  async postRequest(url: string, data: {[key: string]: any} = {}) {
    const { sign, postdata } = this.calculateSign(data);
    const headers = {
      key: this.apiKey,
      sign,
      'Content-Type': 'application/json'
    }
    const apiUrl = `${this.apiUrl}/${url}`;
    try {
      const res = await axios.post(apiUrl, postdata, {
         headers
      });
      return res.data;

    }
    catch (err) {
      console.log(err)
      throw err;
    }

  }

  async getRequest(apiPath: string) {
    const res = await axios.get(`${this.apiUrl}/${apiPath}`);
    return res.data;
  }
  
}
