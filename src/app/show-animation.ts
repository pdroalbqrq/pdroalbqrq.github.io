import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from "@angular/animations";

export const homeTransition = trigger("homeTransition", [
  transition(":enter", [
    query(".block", style({ opacity: 0 })),
    query(
      ".block",
      stagger(100, [
        style({ transform: "translateY(100px)" }),
        animate(
          "0.7s cubic-bezier(.75,-0.48,.26,1.52)",
          style({ transform: "translateY(0px)", opacity: 1 })
        ),
      ])
    ),
  ]),
  transition(":leave", [
    query(
      ".block",
      stagger(100, [
        style({ transform: "translateY(0px)", opacity: 1 }),
        animate(
          "0.5s cubic-bezier(.75,-0.48,.26,1.52)",
          style({ transform: "translateY(100px)", opacity: 0 })
        ),
      ])
    ),
  ]),
]);
