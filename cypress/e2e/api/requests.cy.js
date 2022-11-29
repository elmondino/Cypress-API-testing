import userSchema from "../../support/userSchema.json";

describe("Testing APIs with Cypress", () => {
    it("Creating new user (POST request)", () => {
        // Testing POST request
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                name: "morpheus",
                job: "leader",
            },
        }).then((response) => {
            //we can test ANYTHING that comes from the server e.g. we can test response status
            expect(response.status).to.eq(201);

            //test exact string value
            expect(response.headers.server).to.eq("cloudflare");

            //test random properties
            expect(response.isOkStatusCode).to.be.true;
            expect(response.size).to.be.a("number");
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
            expect(response.body)
                .to.be.an("object")
                .that.does.include({ name: "morpheus", job: "leader" });
            // test response body to include specific properties and values & not to include
            expect(response.body)
                .to.include({ name: "morpheus", job: "leader" })
                .that.does.not.include({ name: "Tim", job: "initiate" });
        });
    });

    it("Testing JSON schema (GET request)", () => {
        // testing GET request
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2",
        }).then((response) => {
            // we can test by JSON schema
            expect(response.body).to.be.jsonSchema(userSchema);
        });
    });

    it("Deleting a user (DELETE request)", () => {
        // testing DELETE request
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/7",
        }).then((response) => {
            //testing succesful response of deletion
            expect(response.status).to.eq(204);
            expect(response.statusText).to.eq("No Content");
            expect(response.isOkStatusCode).to.be.true;
            expect(response).to.have.property("headers");
            expect(response.headers)
                .to.have.property("server")
                .and.be.oneOf(["cloudflare", "randomCDN"]);
        });
    });

    it("Updating a user (PUT request)", () => {
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
    });

    it("Find user with query parameters (GET request)", () => {
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
    });
});
