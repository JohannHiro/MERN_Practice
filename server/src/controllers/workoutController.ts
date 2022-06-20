import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import Workout, { IWorkout } from "../models/workoutModel";

// Get all workouts
const getWorkouts = async (req: Request, res: Response) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// Get single workout
const getWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(404).json({ error: "Invalid Object Id" });
    return;
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(400).json({ error: "No such workout!" });
    return;
  }

  res.status(200).json(workout);
};

// Create new workout
const createWorkout = async (req: Request, res: Response) => {
  const { title, reps, load }: IWorkout = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
};

// Delete workout
const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(404).json({ error: "Invalid Object Id" });
    return;
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    res.status(400).json({ error: "No such workout!" });
    return;
  }

  res.status(200).json(workout);
};

// Update workout
const updateWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(404).json({ error: "Invalid Object Id" });
    return;
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    res.status(400).json({ error: "No such workout!" });
    return;
  }

  res.status(200).json(workout);
};

export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout };
