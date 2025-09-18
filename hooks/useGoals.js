// hooks/useGoals.js
import { useContext } from "react";
import { GoalsContext } from "../contexts/GoalsContext"; // 👈 make sure path is correct

export function useGoals() {
  const context = useContext(GoalsContext);

  if (!context) {
    throw new Error("useGoals must be used inside a GoalsProvider");
  }

  return context;
}
