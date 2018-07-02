//Extract parameters from url:  
function getParams(url) {
    let paramObj = {};

    let splitUrl = url.split("?");
    let splitParams = splitUrl[1].split("&");

    for (let parts of splitParams) {
        let param = parts.split("=");
        paramObj[param[0]] = param[1];
    }
    return paramObj;
}

describe('getParams', () => {
    it('should extract the params of the url and return it in an object', () => {
        expect(getParams('http://example.com/request.htm?a=qwert&b=asdf&c=zxcv')).toEqual({a: 'qwert', b: 'asdf', c: 'zxcv'})
    })
})
