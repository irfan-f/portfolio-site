// cypress/integration/responsive.spec.ts

// Import Cypress types
/// <reference types="cypress" />

import { viewports, MenuToggleTest, AppearanceToggleTest, NavbarTest } from '../helpers/index';

describe( 'Responsive Home Page Design Tests', () => {
  viewports.forEach( viewport => {
    const { breakpoint } = viewport;


    // TODO - Remove once out of development
    it( `Under development banner should be visible when you load the home page; ${viewport.device}`, () => {
      cy.viewport( viewport.width, viewport.height );
      cy.visit( 'http://localhost:9000/' );
      // Check if the under development banner is visible
      cy.get( '.under-development' ).should( 'be.visible' );
    });

    it( `Introduction view should be visible when you load the home page; ${viewport.device}`, () => {
      cy.viewport( viewport.width, viewport.height );
      cy.visit( 'http://localhost:9000/' );
      // Check if the header is visible
      cy.get( 'header' ).should( 'be.visible' );
    });

    it( `Image should be fully visible when you load the home page; ${viewport.device}`, () => {
      cy.viewport( viewport.width, viewport.height );
      cy.visit( 'http://localhost:9000/' );
      // Need to wait for the image to animate in
      cy.get( '.introview-image' ).wait(1000).isFullyWithinViewport( viewport );
    });

    it( `Scroll to top FAB should: appear if scrolled down, take user to top of page when clicked, and not exist when at top; ${viewport.device}`, () => {
      cy.viewport( viewport.width, viewport.height );
      cy.visit( 'http://localhost:9000/' );
      // Check if the scroll to top button appears when scrolling is possible and is not already at the top
      cy.document().then((doc) => {
        const scrollHeight = doc.body.scrollHeight;

        console.log('scrollHeight', scrollHeight);
        console.log('viewport.height', viewport.height);

        if (scrollHeight <= viewport.height) {
          cy.log('Page is not scrollable, skipping scroll FAB tests');
        } else {
          cy.scrollTo('bottom');
          cy.get('.scroll-to-top').should('be.visible');
          // Check if the scroll to top button scrolls to the top of the page
          cy.get('.scroll-to-top').click();
          cy.get('body').should('have.prop', 'scrollTop', 0);
          // Check if the scroll to top button disappears when scrolling to the top
          cy.get('.scroll-to-top').should('not.exist');
        }
      });
    });

    if (breakpoint === 0) {
      // Check if the menu toggle is visible
      MenuToggleTest( viewport );

    } else if (breakpoint === 1) {
      // Check if the menu toggle is visible
      MenuToggleTest( viewport );

    } else if (breakpoint === 2) {
      // Check if the navbar is visible
      NavbarTest( viewport );
      // Check if the appearance toggle is visible
      AppearanceToggleTest( viewport );

    } else if (breakpoint === 3) {
      // Check if the navbar is visible
      NavbarTest( viewport );
      // Check if the appearance toggle is visible
      AppearanceToggleTest( viewport );

    } else if (breakpoint === 4) {
      // Check if the navbar is visible
      NavbarTest( viewport );
      // Check if the appearance toggle is visible
      AppearanceToggleTest( viewport );

    }

  });

} );