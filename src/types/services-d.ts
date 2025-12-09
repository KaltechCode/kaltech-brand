import { gsap, ScrollTrigger, TimelineLite, MatchMedia } from "gsap";
// Note: Depending on your GSAP version, TimelineLite might be Timeline,
// and the main type for GSAP might just be the default export.
// We will use the standard types here.

// 1. Define the type for the object your function returns (the cleanup handles)
interface AnimationCleanup {
  tl: TimelineLite | gsap.core.Timeline; // Timeline instance
  sv: MatchMedia | gsap.core.MatchMedia; // MatchMedia instance
}
