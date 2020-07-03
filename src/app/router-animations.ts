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

// import {
//   sequence,
//   trigger,
//   stagger,
//   animate,
//   style,
//   group,
//   query as q,
//   transition,
//   keyframes,
//   animateChild,
// } from "@angular/animations";

// const query = (s, a, o = { optional: true }) => q(s, a, o);

// export const routerTransition = trigger("routerTransition", [
//   transition("* => *", [
//     query(":enter, :leave", style({ position: "absolute", width: "100%" })),
//     query(":enter", style({ transform: "translateX(100%)" })),
//     sequence([
//       query(":leave", animateChild()),
//       group([
//         query(":leave", [
//           style({ transform: "translateX(0%)" }),
//           animate(
//             "500ms cubic-bezier(.75,-0.48,.26,1.52)",
//             style({ transform: "translateX(-100%)" })
//           ),
//         ]),
//         query(":enter", [
//           style({ transform: "translateX(100%)" }),
//           animate(
//             "500ms cubic-bezier(.75,-0.48,.26,1.52)",
//             style({ transform: "translateX(0%)" })
//           ),
//         ]),
//       ]),
//       query(":enter", animateChild()),
//     ]),
//   ]),
// ]);
