// cypress/integration/responsive.spec.ts

// Import Cypress types
/// <reference types="cypress" />

// Define a function to get the Tailwind breakpoint size
// sm = 375 = 0, md = 414 = 1, lg = 768 = 2, xl = 1280 = 3, 2xl = 1920 = 4
// Using numbers instead of strings for easier comparison
const tailwindBreakpointSize = ( width: number ) => {
  if ( width < 640 ) {
    return 0; // sm
  } else if ( width < 768 ) {
    return 1; // md
  } else if ( width < 1024 ) {
    return 2; // lg
  } else if ( width < 1280 ) {
    return 3; // xl
  } else {
    return 4; // 2xl
  }
}

describe( 'Responsive Design Tests', () => {
  const viewports = [
    { device: 'iPhone 6', width: 375, height: 667 },
    { device: 'iPhone XR', width: 414, height: 896 },
    { device: 'iPad Mini', width: 768, height: 1024 },
    { device: 'MacBook 13', width: 1280, height: 800 },
    { device: 'Desktop', width: 1920, height: 1080 }
  ];

  viewports.forEach( viewport => {
    it( `should display correctly on ${viewport.device}`, () => {
      // Set the viewport size
      cy.viewport( viewport.width, viewport.height );

      // Get tailwind breakpoint size
      const breakpoint = tailwindBreakpointSize( viewport.width );
      // Log the viewport and breakpoint
      cy.log( `Viewport: ${viewport.device}, Breakpoint: ${breakpoint}` );

      // Visit the site
      cy.visit( 'http://localhost:9000/' );

      // Add your assertions here
      cy.get( '.under-development' ).should( 'be.visible' );
      cy.get( '.navbar' ).should( 'be.visible' );
      cy.get( 'header' ).should( 'be.visible' );

      if (breakpoint === 0) {
        cy.get( '.menu-toggle' ).should( 'be.visible' );
      }
      if (breakpoint === 1) {
        cy.get( '.menu-toggle' ).should( 'be.visible' );
      }
      if (breakpoint === 2) {
        cy.get( '.menu-toggle' ).should( 'be.visible' );
      }
      if (breakpoint === 3) {
        cy.get( '.appearance-toggle' ).should( 'be.visible' );
      }
      if (breakpoint === 4) {
        cy.get( '.appearance-toggle' ).should( 'be.visible' );
      }
    });
  } );
} );