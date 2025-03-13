/* eslint-disable */
import React, { useState } from "react";
import { mount } from "cypress/react";
import ProfileImageUpload from "../../src/components/auth/ProfileImageUpload"; 

describe("ProfileImageUpload Component", () => {
  it("should render correctly", () => {
    const TestWrapper = () => {
      const [image, setImage] = useState(null);
      return <ProfileImageUpload profileBase64={image} setProfileImage={setImage} />;
    };

    mount(<TestWrapper />);

    // ✅ בדיקה שהקומפוננטה נטענה
    cy.get("div.relative.text-center").should("exist");
  });
});
