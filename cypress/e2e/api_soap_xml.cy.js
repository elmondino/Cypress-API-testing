import { xml2js } from "../support/utils";

describe(`Feature: Testing additional APIs with Cypress`, () => {
  context(
    `Scenario: Making request to https://www.swi-prolog.org/pack/file_details/wsdl/examples/country.wsdl`,
    () => {
      specify(
        `Then response status should be 200
            And header connection to be "keep-alive"
            And "wsdl:binding" to be an array
            And "wsdl:binding" not be empty`,
        () => {
          cy.request({
            url: "https://www.swi-prolog.org/pack/file_details/wsdl/examples/country.wsdl",
          }).then((response) => {
            const body = xml2js(response.body);
            cy.log(body)

            //test header and response status
            expect(response.status).to.eq(200);
            expect(response.isOkStatusCode).to.be.true;
            expect(response.headers.connection).to.eq("keep-alive");

            expect(body["wsdl:definitions"]["wsdl:types"]["s:schema"]["_attributes"].elementFormDefault).to.eq("qualified");
            expect(body["wsdl:definitions"]["wsdl:types"]["s:schema"]["_attributes"].targetNamespace).to.eq("http://www.webserviceX.NET");

            //check xml body that there is an array and contains values
            expect(body["wsdl:definitions"]["wsdl:binding"]).to.be.an("array")
              .and.not.to.be.empty;


            expect(body["wsdl:definitions"]["wsdl:types"]["s:schema"]["s:element"]).to.deep.include({
                "_attributes": {
                    "name": "GetCountryByCountryCode"
                },
                "s:complexType": {
                    "s:sequence": {
                        "s:element": {
                            "_attributes": {
                                "minOccurs": "0",
                                "maxOccurs": "1",
                                "name": "CountryCode",
                                "type": "s:string"
                            }
                        }
                    }
                }
            })

            //array to include the following properties and values
            expect(body["wsdl:definitions"]["wsdl:binding"]).to.deep.equal([
                {
                    "_attributes": {
                        "name": "countrySoap",
                        "type": "tns:countrySoap"
                    },
                    "soap:binding": {
                        "_attributes": {
                            "transport": "http://schemas.xmlsoap.org/soap/http"
                        }
                    },
                    "wsdl:operation": [
                        {
                            "_attributes": {
                                "name": "GetCountryByCountryCode"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCountryByCountryCode",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetISD"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetISD",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCountries"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCountries",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyCodeByCurrencyName"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCurrencyCodeByCurrencyName",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetISOCountryCodeByCountyName"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetISOCountryCodeByCountyName",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyCode"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCurrencyCode",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCountryByCurrencyCode"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCountryByCurrencyCode",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencies"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCurrencies",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyByCountry"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCurrencyByCountry",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetGMTbyCountry"
                            },
                            "soap:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetGMTbyCountry",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    "_attributes": {
                        "name": "countrySoap12",
                        "type": "tns:countrySoap"
                    },
                    "soap12:binding": {
                        "_attributes": {
                            "transport": "http://schemas.xmlsoap.org/soap/http"
                        }
                    },
                    "wsdl:operation": [
                        {
                            "_attributes": {
                                "name": "GetCountryByCountryCode"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCountryByCountryCode",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetISD"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetISD",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCountries"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCountries",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyCodeByCurrencyName"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCurrencyCodeByCurrencyName",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetISOCountryCodeByCountyName"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetISOCountryCodeByCountyName",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyCode"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCurrencyCode",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCountryByCurrencyCode"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCountryByCurrencyCode",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencies"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCurrencies",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyByCountry"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetCurrencyByCountry",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetGMTbyCountry"
                            },
                            "soap12:operation": {
                                "_attributes": {
                                    "soapAction": "http://www.webserviceX.NET/GetGMTbyCountry",
                                    "style": "document"
                                }
                            },
                            "wsdl:input": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "soap12:body": {
                                    "_attributes": {
                                        "use": "literal"
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    "_attributes": {
                        "name": "countryHttpGet",
                        "type": "tns:countryHttpGet"
                    },
                    "http:binding": {
                        "_attributes": {
                            "verb": "GET"
                        }
                    },
                    "wsdl:operation": [
                        {
                            "_attributes": {
                                "name": "GetCountryByCountryCode"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCountryByCountryCode"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetISD"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetISD"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCountries"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCountries"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyCodeByCurrencyName"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCurrencyCodeByCurrencyName"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetISOCountryCodeByCountyName"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetISOCountryCodeByCountyName"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyCode"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCurrencyCode"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCountryByCurrencyCode"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCountryByCurrencyCode"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencies"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCurrencies"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyByCountry"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCurrencyByCountry"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetGMTbyCountry"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetGMTbyCountry"
                                }
                            },
                            "wsdl:input": {
                                "http:urlEncoded": {}
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    "_attributes": {
                        "name": "countryHttpPost",
                        "type": "tns:countryHttpPost"
                    },
                    "http:binding": {
                        "_attributes": {
                            "verb": "POST"
                        }
                    },
                    "wsdl:operation": [
                        {
                            "_attributes": {
                                "name": "GetCountryByCountryCode"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCountryByCountryCode"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetISD"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetISD"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCountries"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCountries"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyCodeByCurrencyName"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCurrencyCodeByCurrencyName"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetISOCountryCodeByCountyName"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetISOCountryCodeByCountyName"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyCode"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCurrencyCode"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCountryByCurrencyCode"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCountryByCurrencyCode"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencies"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCurrencies"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetCurrencyByCountry"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetCurrencyByCountry"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        },
                        {
                            "_attributes": {
                                "name": "GetGMTbyCountry"
                            },
                            "http:operation": {
                                "_attributes": {
                                    "location": "/GetGMTbyCountry"
                                }
                            },
                            "wsdl:input": {
                                "mime:content": {
                                    "_attributes": {
                                        "type": "application/x-www-form-urlencoded"
                                    }
                                }
                            },
                            "wsdl:output": {
                                "mime:mimeXml": {
                                    "_attributes": {
                                        "part": "Body"
                                    }
                                }
                            }
                        }
                    ]
                }
            ]);
          });
        }
      );
    }
  );
});
