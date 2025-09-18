import { createContext, useState } from "react";
import { db } from "../firebaseConfig";
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

export const GoalsContext = createContext();

export function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([]);

  // Fetch all goals
  async function fetchGoals() {
    try {
      const snapshot = await getDocs(collection(db, "goals"));
      const goalsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGoals(goalsList);
    } catch (err) {
      console.error("Error fetching goals:", err);
    }
  }

  // Create a new goal
  async function createGoal(goalData) {
    try {
      await addDoc(collection(db, "goals"), goalData);
      await fetchGoals(); // refresh state
    } catch (err) {
      console.error("Error creating goal:", err);
    }
  }

  // Delete a goal
  async function deleteGoal(id) {
    try {
      await deleteDoc(doc(db, "goals", id));
      await fetchGoals();
    } catch (err) {
      console.error("Error deleting goal:", err);
    }
  }

  // Update a goal
  async function updateGoal(id, updates) {
    try {
      await updateDoc(doc(db, "goals", id), updates);
      await fetchGoals();
    } catch (err) {
      console.error("Error updating goal:", err);
    }
  }

  return (
    <GoalsContext.Provider
      value={{ goals, fetchGoals, createGoal, deleteGoal, updateGoal }}
    >
      {children}
    </GoalsContext.Provider>
  );
} 