import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from "@angular/animations";

// export const slide = trigger("routeAnimations",
// [
//   transition("* <=> *", slideTest()),
// ]);

// function slideTest() {
//   const optional = { optional: true };

//   return [
//     style({ position: "relative" }),
//     query(
//       ":enter, :leave",
//       [
//         style({
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//         }),
//       ],
//       optional
//     ),
//     query(":enter", [style({ left: "-100%" })]),
//     query(":leave", animateChild(), optional),
//     group([
//       query(
//         ":leave",
//         [animate("600ms ease-out", style({ left: "100%" }))],
//         optional
//       ),
//       query(":enter", [animate("600ms ease-out", style({ left: "0%" }))]),
//     ]),
//     query(":enter", animateChild()),
//   ];
// }

export const slide = trigger("routeAnimations", [
  transition(":increment", slideTo("bottom")),
  transition(":decrement", slideTo("top")),
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
          left: 0,
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
        [animate("600ms ease-out", style({ [direction]: "100%" }))],
        optional
      ),
      query(":enter", [
        animate("600ms ease-out", style({ [direction]: "0%" })),
      ]),
      query(":enter", animateChild()),
    ]),
  ];
}
