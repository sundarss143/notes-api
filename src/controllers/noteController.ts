import { Request, Response } from "express";
import Note from "../models/Note";

// CREATE NOTE
export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({
      title,
      content,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET ALL NOTES
export const getNotes = async (_req: Request, res: Response) => {
  try {
    const notes = await Note.find();

    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET SINGLE NOTE
export const getNoteById = async (req: Request, res: Response) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE NOTE
export const updateNote = async (req: Request, res: Response) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE NOTE
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};