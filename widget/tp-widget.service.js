class TpWidgetService {
    constructor ( $http ) {
        this.$http = $http;
    }

    getReviews () {
        // return this.$http.get('http://followthewhiterabbit.trustpilot.com/fe/ressources/reviews.json');
        return _reviews;
    }
}

TpWidgetService.$inject = [ '$http' ];

export default TpWidgetService;

let _reviews = [
    {
    	"firstName":"Simon", 
    	"lastName":"Lock",
    	"fullName":"Simon Lock",
    	"location":"Kolding",
    	"reviewTitle":"Super quality.. I will show here again!",
    	"reviewBody":"Super nice quality, fast devilery, good prices. I will shop here again!",
    	"starRating":"5"
    }, 
    {
    	"firstName":"Gav", 
    	"lastName":"",
    	"fullName":"Gav",
    	"location":"",
    	"reviewTitle":"Princely Sum",
    	"reviewBody":"A decent local curry house in Faversham, Kent known for its Elvis nights.",
    	"starRating":"4"    	
    },
    {
    	"firstName":"Justin", 
    	"lastName":"Wright",
    	"fullName":"Justin Wright",
    	"location":"London, GB",
    	"reviewTitle":"Good Services",
    	"reviewBody":"A decent place to introduce your taste buds to fiery Indian fare",
    	"starRating":"3"
    },
    {
    	"firstName":"Erika", 
    	"lastName":"Wolfe",
    	"fullName":"Erika Wolfe",
    	"location":"Gothenburg, SE",
    	"reviewTitle":"Nightmare experience - no product, no communication, no refund; improved by rapid resolution",
    	"reviewBody":"In early 2012, I ordered a set of chairs from Infurn. I thought that by ordering in March, I would have what I needed by November, certainly. I wanted the perfect chairs for my house, and really did not NEED them before the annual Thanksgiving dinner (the only time of year I have a need for a whole lot of chairs at one time). I played it safe, I thought, by ordering so far in advance.",
    	"starRating":"2"
    },
    {
    	"firstName":"Hugo", 
    	"lastName":"Beja",
    	"fullName":"Hugo Beja",
    	"location":"Praia Da Barra, PT",
    	"reviewTitle":"FRAUD",
    	"reviewBody":"I've been patiently waiting for a miracle to happen with our order AU-316084, 12 Chairs!! First the delays, lots and lots of delays with no apparent reason... after they send just 1/2 of the order and say it's all... So we bought 'Pairs' of chairs... we paid for 5 PAIRS and received 5 chairs!!! The other 2, the rocket chairs we never receive.... Communication ZERO, they simply ignore the e-mails... when they did respond they asked us to prove our order to be pairs!!! LOL and just stopped communicating... their website is constantly down... probably to make lose interest and rest your forces to recover what you paid for!!",
    	"starRating":"1"
    },            
];