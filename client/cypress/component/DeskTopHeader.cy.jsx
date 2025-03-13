/* eslint-disable */
import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom"; //  מאפשר לבדוק נתיבים מקומיים
import DesktopHeader from "../../src/components/layout/DeskTopHeader"; 

//? הכותרת מופיעה 
describe("DesktopHeader Component", () => {
  it("should render the header correctly", () => {
    mount(
      <MemoryRouter initialEntries={["/dashboard"]}> 
        <DesktopHeader />
      </MemoryRouter>
    );

    cy.contains("Dashboard").should("be.visible"); 
  });
});
