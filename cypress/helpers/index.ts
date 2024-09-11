// 0 sm 640px
// 1 md	768px
// 2 lg	1024px
// 3 xl	1280px
// 4 2xl	1536px

export const viewports = [
  { device: 'iPhone 6', width: 375, height: 667, breakpoint: 0 },
  { device: 'iPhone XR', width: 414, height: 896, breakpoint: 0 },
  { device: 'iPad Mini', width: 768, height: 1024, breakpoint: 1 },
  { device: 'iPad Pro', width: 1024, height: 1366, breakpoint: 2 },
  { device: 'MacBook 13', width: 1280, height: 800, breakpoint: 3 },
  { device: 'Desktop', width: 1920, height: 1080, breakpoint: 4 }
];

export const AppearanceToggleTest = (viewport: CustomViewport) => {
  it( `Appearance toggle should be visible when you load the home page; ${viewport.device}`, () => {
    cy.viewport( viewport.width, viewport.height );
    cy.visit( 'http://localhost:9000/' );
    // Check if the appearance toggle is visible
    cy.get( '.appearance-toggle' ).should( 'be.visible' );
  });
}

export const NavbarTest = (viewport: CustomViewport) => {
  it( `Navbar should be visible when you load the home page; ${viewport.device}`, () => {
    cy.viewport( viewport.width, viewport.height );
    cy.visit( 'http://localhost:9000/' );
    // Check if the navbar is visible
    cy.get( '.navbar' ).should( 'be.visible' );
  });
}

export const MenuToggleTest = (viewport: CustomViewport) => {
  it( `Menu toggle should be visible when you load the home page; ${viewport.device}`, () => {
    cy.viewport( viewport.width, viewport.height );
    cy.visit( 'http://localhost:9000/' );
    // Check if the menu toggle is visible
    cy.get( '.menu-toggle' ).should( 'be.visible' );
  });
}
