/* eslint-disable */
import React from "react";
import { mount } from "cypress/react";
import ProfileEditModal from "../../src/components/sections/profile-sections/EditModel"; 

describe("ProfileEditModal Component", () => {
  it("should open modal when 'Edit' button is clicked", () => {
    mount(<ProfileEditModal />);

    // ✅ בהתחלה המודל לא צריך להיות גלוי
    cy.get('[role="presentation"]').should("not.exist");

    // ✅ לחיצה על כפתור "Edit"
    cy.contains("Edit").click();

    // ✅ עכשיו ה-Modal אמור להופיע
    cy.get('[role="presentation"]').should("be.visible");

    // ✅ בדיקה שהכותרת "Edit Profile Details" קיימת
    cy.contains("Edit Profile Details").should("be.visible");
  });
});
