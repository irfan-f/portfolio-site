/// <reference types="cypress" />

type CustomViewport = {
  device: string,
  height: number,
  width: number
}

declare namespace Cypress {
  interface Chainable<Subject = any> {
      /**
       * Custom command to check if an element is fully within the viewport
       * @example cy.get('element').isFullyWithinViewport(viewport)
       */
      isFullyWithinViewport(viewport: CustomViewport): Chainable<Element>;
  }
}