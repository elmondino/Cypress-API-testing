import userSchema from "../support/userSchema.json";

describe(`Feature: Testing APIs with Cypress`, () => {
  context(
    `Scenario: When creating POST request to https://reqres.in/api/users 
        Given request is made with properties of "name: morpheus, job: leader"`,
    () => {
      specify(
        `Then POST request response status should equal 201
            And header server should equal cloudflare
            And isOkStatusCode should be true
            And response body id should be a string
            And response header should be an object
            And response header should include an object with the following properties:
                ["cf-cache-status"]: "DYNAMIC",
                ["x-powered-by"]: "Express",
                server: "cloudflare",
                connection: "keep-alive",
            And response body should be an object that includes "name: morpheus, job: leader"`,
        () => {
          // Testing POST request
          cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
              name: "morpheus",
              job: "leader",
            },
          }).as("postRequest");

          cy.get("@postRequest").should((response) => {
            expect(response.status).to.eq(201);

            //test exact string value
            expect(response.headers.server).to.eq("cloudflare");

            //test random properties
            expect(response.isOkStatusCode).to.be.true;
            expect(response.body).property("id").to.be.a("string");

            //we can test response headers e.g. response header to be an object
            expect(response.headers).to.be.an("object");
            //object to include the following properties and values
            expect(response.headers).to.deep.include({
              ["cf-cache-status"]: "DYNAMIC",
              ["x-powered-by"]: "Express",
              server: "cloudflare",
              connection: "keep-alive",
            });

            //test response body for complex assertion
            expect(response.body).to.be.an("object").that.does.include({
              name: "morpheus",
              job: "leader",
            });
          });
        }
      );
    }
  );

  context(
    "Scenario: When making GET request to https://reqres.in/api/users/2",
    () => {
      specify("Then response.body should match userSchema.json schema", () => {
        // testing GET request
        cy.request({
          method: "GET",
          url: "https://reqres.in/api/users/2",
        }).as("getUserRequest");
        context("hello", () => {});
        cy.get("@getUserRequest").should((response) => {
          // we can test by JSON schema
          expect(response.body).to.be.jsonSchema(userSchema);
        });
      });
    }
  );
});
