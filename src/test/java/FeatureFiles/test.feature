@test
Feature: Testing opt-in API
	
	Scenario: Testing Opt In API when customer is having more than 1 eligible account
	
		Given url identityAssertions
		And request path:Resources/TestData/testData.json') 
		When method post
		Then status 500