const api = require('./axios.config');
const iconv = require('iconv-lite');
const option = {
    url: "//polling.finance.naver.com/api/realtime",
    qs: {
        query: "SERVICE_ITEM:068270"
    },
    encoding: null
}

async function getStock(stock_code) {
    const response = await api.get("/api/realtime?query=SERVICE_ITEM:"+stock_code);
    console.log(response);
    if(response.statusCode == 200){
        const body = iconv.decode(response.body);
        return body;
    }
}

function getKOS(kos_code) {
    return new Promise((resolve)=>{
       option.qs.query = `SERVICE_INDEX:${kos_code}`;
       request(option, (res, err, body)=>{
            const result = iconv.decode(body, 'EUC-KR');
            resolve(result);
       });
    });
}

module.exports = {
    getStock,
    getKOS
}

// //https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:068270|SERVICE_RECENT_ITEM:005930


// SERVICE_INDEX:KOSPI,KOSDAQ,KPI200|SERVICE_POPULAR_ITEM:247540,454910,086520,064350,259960,051910,047810,012450,007660,450080&_callback=window.__jindo2_callback._5659
// SERVICE_RECENT_ITEM:&_callback=window.__jindo2_callback._1942