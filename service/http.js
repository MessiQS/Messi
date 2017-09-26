export default class Http{
    static post(api,paramObj){
        let url = 'http://127.0.0.1:8080/' + api,
            body = ((obj)=>{
                let keyArray = Object.keys(obj),
                    str = keyArray.map((res,index)=>{
                        if(index !== keyArray.length - 1)
                            return res + '=' + obj[res] + '&';
                        else
                            return res + '=' + obj[res];
                    }).join('');
                return str;
            })(paramObj),
            params = Object.assign({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }, 
                body:body,            
            });
        return fetch(url,params)
                .then( res => res.json())
                .catch( err => console.log(err))

    }
}