var request = require('request');

var apiOptions = { server : "http://localhost:8083/" };
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "http://actuarial-mathematics-api.herokuapp.com/";
}

/* GET Gompertz Law */
module.exports.gompertzLaw = function(req, res, next){
    res.render('SurvivalModels/gompertz-law', 
        {
            title: 'Gompertz Law',
            description: 'Gompertz Law ... $$ S_x(t) = exp \\left\\{ \\frac{-B}{\\log c} c^x (c^t - 1 ) \\right\\} $$',
            queryParms: [
                {name: 'B', id:'B', default:0.001, error:''},
                {name: 'c', id:'c', default:1.02, error:''},
                {name: 'x', id:'x', default:40, error:''}],
            results:{
                data:{
                    age:40, 
                    SurvivalData:[
                        {t:1, mortality:1.2345}, 
                        {t:2, mortality:2.3456}
                        ]}, 
                error:''}
        });
}

/* GET Gompertz law args */
module.exports.gompertzLawResults = function(req, res, next){
    var requestOptions, path;
    var args = req.body;
    
    path = 'api/survival-models/gompertzLaw';
    var fullPath = apiOptions.server + path;
    requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},
        qs : args
    };
    
    request(requestOptions, function(err, response, body) {
            var resultsData = {};
            
            if (err) {
                console.log(err);
                resultsData = {data:{}, error:err.message}
            } else if (response.statusCode === 200) {
                console.log(body);
                resultsData = body;
            } else {
                console.log(response.statusCode);
            }

            res.render('SurvivalModels/gompertz-law', 
            {
                title: 'Gompertz Law',
                description: 'Gompertz Law ... $$ S_x(t) = exp \\left\\{ \\frac{-B}{\\log c} c^x (c^t - 1 ) \\right\\} $$',
                queryParms: [
                    {name: 'B', id:'B', default:0.001, error:''},
                    {name: 'c', id:'c', default:1.02, error:''},
                    {name: 'x', id:'x', default:40, error:''}],
                results: {
                    data: resultsData[0], 
                    error:''}
            });
        });
    
    
    
    
}

/* GET Makeham's Law */
module.exports.makehamsLaw = function(req, res){
    res.render('formula-content', 
        {
            title: 'Makeham\'s Law',
            description: 'Makeham\'s Law ... '
        });
}