/* GET Gompertz Law */
module.exports.gompertzLaw = function(req, res){
    res.render('formula-content', 
        {
            title: 'Gompertz Law',
            description: 'Gompertz Law ... $$ S_x(t) = exp \\left\\{ \\frac{-B}{\\log c} c^x (c^t - 1 ) \\right\\} $$'
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
