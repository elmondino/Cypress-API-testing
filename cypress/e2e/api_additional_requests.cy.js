describe(`Feature: Testing additional APIs with Cypress`, () => {
  context(
    `Scenario: When DELETE request is sent to https://reqres.in/api/users/7`,
    () => {
      specify(
        `Then request response status should equal 204
            And we should have response header property
            And statusText should equal "No Content"
            And isOkeStatusCode should be true
            And header should have "server" property
            And it's value should be one of "cloudflare or "randomCDN"`,
        () => {
          // testing DELETE request
          cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/7",
          }).then((response) => {
            //testing succesful response of deletion
            expect(response.status).to.eq(204);
            expect(response).to.have.property("headers");
            expect(response.statusText).to.eq("No Content");
            expect(response.isOkStatusCode).to.be.true;
            expect(response.headers)
              .to.have.property("server")
              .and.be.oneOf(["cloudflare", "randomCDN"]);
          });
        }
      );
    }
  );

  context(
    `Scenario: When PUT request is sent to https://reqres.in/api/users/6
        with the following properties:
        "name: "Lindsay",
        job: "jumping"," `,
    () => {
      specify(
        `Then response body name should equal to Lindsay
            And body.job should equal to jumping
            And body.job should be a string`,
        () => {
          // Testing PUT request
          cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/6",
            body: {
              name: "Lindsay",
              job: "jumping",
            },
            // using custom plugin to check return properties with specified values and types
          }).then(({ body }) => {
            expect(body.name).to.eq("Lindsay");
            expect(body.job).to.eq("jumping");
            expect(body.job).to.be.a("string");
          });
        }
      );
    }
  );

  context(
    `Scenario: When making GET request to https://jsonplaceholder.cypress.io/comments?postId=1&id=3`,
    () => {
      specify(
        `Then response body should be an array
            And have length of 1
            And first array item should contain 
            "postId: 1,
            id: 3"`,
        () => {
          //   Can can us qs for query string the same as just easier to read
          //   url: 'https://jsonplaceholder.cypress.io/comments?postId=1&id=3',
          cy.request({
            url: "https://jsonplaceholder.cypress.io/comments",
            qs: {
              postId: 1,
              id: 3,
            },
          })
            //we can also write assertions this way
            .its("body")
            .should("be.an", "array")
            .and("have.length", 1)
            .its("0") // yields first element of the array
            .should("contain", {
              postId: 1,
              id: 3,
            });
        }
      );
    }
  );
});
