/* GET 'contents' page */
module.exports.contents = function(req, res){
    res.render('contents', {title: 'Contents'});
}

/* GET 'chapter 1' page */
module.exports.chapter1 = function(req, res){
    res.render('index', {title: 'Chapter 1 - Survival Models'});
}