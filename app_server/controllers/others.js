/* GET about page */
module.exports.about = function(req, res, next) {
  res.render('generic-text', {
    title: 'About Actuarial Mathematics',
    content: 'This MEAN implementation of Actuarial Mathematics is a website used for demonstrating the use of the MEAN stack along with F#-based WebAPI components. It exposes common actuarial mathematics taken from the book <a href="http://www.amazon.co.uk/Actuarial-Mathematics-Contingent-International-Science/dp/1107044073/ref=sr_1_1?s=books&ie=UTF8&qid=1426668000&sr=1-1&keywords=actuarial+mathematics">Actuarial Mathematics for Life Contingent Risks</a> in a series of chapter based functions.' });
  };

  /* <a href="http://www.amazon.co.uk/Actuarial-Mathematics-Contingent-International-Science/dp/1107044073/ref=sr_1_1?s=books&ie=UTF8&qid=1426668000&sr=1-1&keywords=actuarial+mathematics">Actuarial Mathematics for Life Contingent Risks</a> in a series of chapter based functions.*/