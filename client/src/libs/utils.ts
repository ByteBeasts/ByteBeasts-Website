import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// This function efficiently combines CSS classes, 
// avoiding duplicates and conflicts in Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to generate random colors based on the brand palette
export function getRandomBrandColor(opacity: number = 1) {
  const colors = [
    `rgba(149, 1, 36, ${opacity})`, // primary
    `rgba(209, 9, 61, ${opacity})`, // lighter
    `rgba(133, 0, 42, ${opacity})`, // darker
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to apply a smooth parallax effect
export function applyParallax(element: HTMLElement, speed: number = 0.1) {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const offset = scrollPosition * speed;
    element.style.transform = `translateY(${offset}px)`;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
}

// Checks if an element is in the viewport
export function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Generate a random entrance animation class
export function getRandomEntranceAnimation() {
  const animations = [
    'fade-in-up',
    'fade-in-down',
    'fade-in-left',
    'fade-in-right',
    'zoom-in',
    'scale-in',
  ];
  
  return animations[Math.floor(Math.random() * animations.length)];
}

// Format date to display "X time ago"
export function formatTimeAgo(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years";
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months";
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days";
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours";
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes";
  
  return Math.floor(seconds) + " seconds";
}
