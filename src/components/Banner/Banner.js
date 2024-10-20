import React from "react";

function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;

/**
 * Creating components is like creating a class that defines both styles AND logic.
 * CSS classes are for reusable styles. Apply it to an element to style it and it's children.
 * Componenets can be used in the same way. Wrap your html in a component to apply styles to it, but also provide logic.
 * Some components are closer to templates where the html is more fixed, whereas some components are more abstract.
 * The abstract component is used for applying general styles and providing shared logic.
 * The children of the abstract component inherit these styles and logic.
 * We can then create more concrete instances of the abstract component, which themselves can be used to create a component.
 * This is called compositon, where one component is made using another component.
 * e.g. if we want a win banner and a lose banner, we can abstract a banner component.
 * The banner component defines styles and logic common to all banners.
 * We then create a win banner component, and a lose banner component, which both use the banner component.
 * The win and lose banners define the markup specific to each use-case, and are more concrete components, whilst both sharing the
 * styles and logic defined by the banner component, which is more abstract and general, without much fixed markup.
 * This pattern promotes code re-usability.
 */
