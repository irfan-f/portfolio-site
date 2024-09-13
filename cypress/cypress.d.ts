/// <reference types="cypress" />

/**
 * Namespace for custom types
 */
declare namespace Types {
  /**
   * Type representing a custom viewport
   */
  type CustomViewport = {
    device: string;
    width: number;
    height: number;
    breakpoint: number;
  }
}

declare namespace Cypress {
  interface Chainable<Subject = any> {
      /**
       * Custom command to check if an element is fully within the viewport
       * @example cy.get('element').isFullyWithinViewport(viewport)
       */
      isFullyWithinViewport(viewport: Types.CustomViewport): Chainable<Subject>;
  }
}


