import { Given, Then ,When } from 'cypress-cucumber-preprocessor/steps'

let resbody="";
const request = 'https://gorest.co.in/public/v2/posts';
const token = '950600efc6b630912244b424196d9727b6418008ce573c6df2aa011f60bdc9ed';
const authorization = `Bearer ${token}`;
Given('user can launch the url', () => {
    // const token = localStorage.getItem("access_token");
    cy.request({
      method: "GET",
      url: request,
      headers: {
        authorization,
      },
      body:{

      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      resbody = response;
      cy.log(JSON.stringify(resbody))
    });
  });

  Then('user can trasverse and check reponse in pages', () => {
 const requestPage ='https://gorest.co.in/public/v2/users?page=5&gender=female&status=active';
    cy.request({
        method: "GET",
        url: requestPage,
        headers: {
          authorization,
        },
      }).then((response) => {
        response.body.forEach((element) => {
            expect(element.gender).to.eq('female');
            expect(element.status).to.eq('active')
        });
       
      });
    });
    When('user can add member information', () => {
        const mail =`tes5-${Math.floor(Math.random()*999)}@mail.ca`;
        const requestPagePostAction ='https://gorest.co.in/public/v2/users?page=1&status=inactive';
           cy.request({
               method: "POST",
               url: requestPagePostAction,
               headers: {
                 authorization,
               },
               body:{
                    "name":"test1",
                    "email": `${mail}`,
                    "gender":"male",
                    "status":"inactive"

               },
             }).then((response) => {
                    expect(response.status).to.eq(201);
                    expect(response.body).has.property("email",`${mail}`)
                });
              
             });
        


