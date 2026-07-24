import { gsap } from 'gsap'; export const pulseHeart = (element: HTMLElement) => gsap.fromTo(element,{scale:.9,opacity:.7},{scale:1.08,opacity:1,duration:1.4,yoyo:true,repeat:-1,ease:'sine.inOut'});
