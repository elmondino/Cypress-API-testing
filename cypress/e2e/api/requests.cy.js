import spok from "cy-spok";
import boardSchema from "../../support/userSchema.json";

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

        //we can test response headers e.g. response header to be an object
        expect(response.headers).to.be.an("object");
        //test response header to include the following properties and values in the object
        expect(response.headers).to.deep.include({
            ["cf-cache-status"]: "DYNAMIC",
            ["x-powered-by"]: "Express",
            server: "cloudflare",
            connection: "keep-alive",
        });

        //test response body for complex assertion
        expect(response.body)
            .to.be.an("object")
            .that.does.not.include({ name: "Ben" });
        // test response body to include specific properties and values & not to include
        expect(response.body)
            .to.include({ name: "morpheus", job: "leader" })
            .that.does.not.include({ name: "Tim", job: "initiate" });

        //test single string value
        expect(response.headers.server).to.eq("cloudflare");

        //test random properties
        expect(response.isOkStatusCode).to.be.true;
        expect(response.size).to.be.a("number");
    });
});

it("Testing JSON schema (GET request)", () => {
    // testing GET request
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users/2",
    }).then((response) => {
        // we can test by JSON schema 
        expect(response.body).to.be.jsonSchema(boardSchema);
    });
});

it("Updating a user (PUT request)", () => {
    // Testing PUT request
    cy.request({
        method: "PUT",
        url: "https://reqres.in/api/users/6",
        body: {
            name: "Lindsay",
            job: "jumping"
        },
        // using custom plugin to check return properties with specified values and types 
    }).then(spok({
        body: {
            name: "Lindsay",
            job: "jumping",
            updatedAt: spok.type('string')
        }
    }))
});

it("Deleting a user (DELETE request)", () => {
    // testing DELETE request
    cy.request({
        method: "DELETE",
        url: "https://reqres.in/api/users/7",
    }).then((response) => {
        //testing succesful response of deletion
        expect(response.status).to.eq(204);
        expect(response.statusText).to.eq("No Content")
        expect(response.isOkStatusCode).to.be.true
        expect(response).to.have.property('headers')
        expect(response.headers).to.have.property('server').and.be.oneOf(['cloudflare', 'randomCDN'])
    });
});
