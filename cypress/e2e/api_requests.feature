# cypress/e2e/api_requests.feature
Feature: Testing APIs with Cypress
  Scenario: When creating POST request to https://reqres.in/api/users
    Given request is made with properties of "name: morpheus, job: leader"
    Then POST request response status should equal 201
    And header server should equal cloudflare
    And isOkStatusCode should be true
    And response body id should be a string
    And response header should be an object
    And response header should include an object with the following properties:
    ["cf-cache-status"]: "DYNAMIC",
    ["x-powered-by"]: "Express",
    server: "cloudflare",
    connection: "keep-alive",
    And response body should be an object that includes "name: morpheus, job: leader"
    
  Scenario: When making GET request to https://reqres.in/api/users/2
    Then response.body should match userSchema.json schema