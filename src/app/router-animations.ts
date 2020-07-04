import {
  trigger,
  transition,
  style,
  animateChild,
  group,
  animate,
  sequence,
  query,
} from "@angular/animations";

export const slide = trigger("routeAnimations", [
  transition(":increment", slideTo("right")),
  transition(":decrement", slideTo("left")),
]);

function slideTo(direction: string) {
  const optional = { optional: true };

  return [
    style({ position: "relative" }),
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          [direction]: 0,
          width: "100%",
          height: "100%",
        }),
      ],
      optional
    ),
    query(":enter", [style({ [direction]: "-100%" })]),
    query(":leave", animateChild(), optional),
    group([
      query(
        ":leave",
        [animate("400ms ease", style({ [direction]: "100%" }))],
        optional
      ),
      query(":enter", [animate("400ms ease", style({ [direction]: "0%" }))]),
      query(":enter", animateChild()),
    ]),
  ];
}
