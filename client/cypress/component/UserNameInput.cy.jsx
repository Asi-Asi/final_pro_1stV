/* eslint-disable */
import React, { useState } from "react";
import { mount } from "cypress/react";
import { UsernameInput } from "../../src/components/auth/CustomInputs";

describe("UsernameInput Component", () => {
  it("should render correctly", () => {
    const TestWrapper = () => {
      const [username, setUsername] = useState("");
      return <UsernameInput username={username} setUsername={setUsername} />;
    };

    mount(<TestWrapper />); // רינדור הקומפוננטה

    cy.get("input#username").should("exist"); 
  });
});
