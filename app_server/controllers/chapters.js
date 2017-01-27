/* GET 'contents' page */
module.exports.contents = function(req, res){
    res.render('contents', 
        {
            title: 'Contents',
            pageHeader: {
                title: 'Actuarial Mathematics',
                strapline: 'Samples from actuarial mathematics' 
            },
            chapters: [
                {
                    title: 'Survival Models',
                    url: 'survival-models',
                    colour: 'red'
                },
                {
                    title: 'Life Tables',
                    url: 'life-tables',
                    colour: 'orange'
                },
                {
                    title: 'Insurance Benefits',
                    url: 'insurance-benefits',
                    colour: 'yellow'
                },
                {
                    title: 'Annuities',
                    url: 'annuities',
                    colour: 'green'
                },
                {
                    title: 'Premium Calculation',
                    url: 'premium-calculation',
                    colour: 'blue'
                },
                {
                    title: '...',
                    url: '',
                    colour: 'indigo'
                }
            ]
        });
}

/* GET 'chapter 2' page */
module.exports.survivalModels = function(req, res){
    res.render('chapter-info', 
               {
                   title: 'Chapter 2 - Survival Models',
                   description: 'Survival Models use mathematical functions to model the future lifetime of individuals. Probabilites of death or survival are modelled and the force of mortality concept is introduced.The functions in this section relate to Chapter 2 of the book.',
                   models: [
                       {
                            title: 'Gompertz Law',
                            description: 'Gompertz Law defines a survival model of the form $$ S_x(t) = exp \\left\\{ \\frac{-B}{\\log c} c^x (c^t - 1 ) \\right\\} $$',
                            url: '/survival-models/gompertz-law',
                            colour: 'red'
                       },
                       {
                            title: 'Makeham\'s Law',
                            description: 'Makeham\'s Law ... ',
                            url: '/survival-models/makehams-law',
                            colour: 'orange'
                       }
                   ]
               });
}

/* GET 'chapter 3' page */
module.exports.lifeTables = function(req, res){
    res.render('chapter-info', 
               {
                   title: 'Chapter 3 - Life Tables and Selection',
                   description: 'Material from Chapter 3 of the book',
                   models: []
               });
}