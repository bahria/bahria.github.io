angular
  .module('app', [])
  .controller('appCtrl', appCtrl);

function appCtrl($scope) {
  $scope.title = "Search with AngularJs";
  $scope.contacts = [{
    name: 'Zest Restaurant',
    number: '042-35963807 - 0336-1401850 - 0347-4420717 - 0305-4100018'
  }, {
    name: 'Burger 18',
    number: '042-35976338'
  }, {
    name: 'Gourmet Bakers',
    number: '0322-2227777'
  }, {
    name: 'Doce Bakers',
    number: '0315-4007038'
  }, {
    name: 'Pizza Pan',
    number: '042-37862529'
  }]
}

it ('Should search contacts across this input', function() {
  var searchContact = element(by.model('searchContact'));
  searchContact.clear();
  searchContact.sendKeys('m');
  expectedContactName(['Mary Jane', 'Matt Jonny'], 'contact');
  
  searchContact.clear();
  searchContact.sendKeys('042');
  expectedContactName(['Burger 18', 'Pizza Pan', 'Zest Restaurant'], contact);
});
