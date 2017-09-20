import * as WeChat from 'react-native-wechat';
import { Alert } from 'react-native';
WeChat.registerApp('sansoApp');

export default class payService {
    static wechatPay(data) {
        WeChat.isWXAppInstalled()
            .then(isInstalled => {
                if (isInstalled) {
                    WeChat.once('PayReq.Resp', response => {
                        if (parseInt(response.errCode) === 0) {
                            toastShort('支付成功');
                        } else {
                            toastShort('支付失败');
                        }
                    });
                    const result = await WeChat.pay(
                        {
                            partnerId: '',  // 商家向财付通申请的商家id
                            prepayId: '',   // 预支付订单
                            nonceStr: '',   // 随机串，防重发
                            timeStamp: '',  // 时间戳，防重发
                            package: '',    // 商家根据财付通文档填写的数据和签名
                            sign: ''        // 商家根据微信开放平台文档对数据做的签名
                        }
                    );
                    if (result.errCode && result.errStr) {
                        console.log('错误')
                    }
                } else {
                    Alert.alert('没有安装微信，请先安装微信')
                }
            })
    }
}