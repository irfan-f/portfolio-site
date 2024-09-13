/// <reference types="cypress" />

// Add a custom command to check if an element is fully within the viewport
Cypress.Commands.add( 'isFullyWithinViewport', { prevSubject: true }, ( subject, viewport: Types.CustomViewport ) => {
  const bounding = subject[0].getBoundingClientRect();

  const isWithinViewport = (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= viewport.height &&
    bounding.right <= viewport.width
  );

  expect( isWithinViewport ).to.be.true;

  return subject;
});
