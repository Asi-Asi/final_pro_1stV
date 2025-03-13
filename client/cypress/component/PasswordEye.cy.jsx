/* eslint-disable */
import React, { useState } from "react";
import { mount } from "cypress/react";
import { PasswordField } from "../../src/components/auth/PasswordField"; 

describe("PasswordField Component", () => {
  it("should toggle password visibility when eye icon is clicked", () => {
    const TestWrapper = () => {
      const [password, setPassword] = useState("");
      return <PasswordField id="password" label="Password" value={password} setValue={setPassword} />;
    };

    mount(<TestWrapper />);

    // ✅ בדיקה שהשדה מופיע כסיסמה בהתחלה
    cy.get("input#password").should("have.attr", "type", "password");

    // ✅ לחיצה על האייקון של העין
    cy.get("span.cursor-pointer").first().click();

    // ✅ בדיקה שהשדה משתנה לטקסט
    cy.get("input#password").should("have.attr", "type", "text");

    // ✅ לחיצה חוזרת על האייקון
    cy.get("span.cursor-pointer").first().click();

    // ✅ בדיקה שהשדה חוזר להיות "password"
    cy.get("input#password").should("have.attr", "type", "password");
  });
});
