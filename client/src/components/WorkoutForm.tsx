import { FormEventHandler, useState } from "react";

// MUI components
import {
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

const WorkoutForm = () => {
  const [title, setTitle] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [load, setLoad] = useState<string>("");

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const newWorkout = { title, reps, load };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(newWorkout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    // Reset form value
    setTitle("");
    setReps("");
    setLoad("");
  };

  // TODO: Number input validation

  return (
    <Grid
      container
      direction="column"
      component="form"
      onSubmit={handleSubmit}
      spacing={5}
    >
      <Grid item>
        <Typography gutterBottom variant="h4">
          Add New Workout
        </Typography>
      </Grid>

      <Grid item>
        <TextField
          variant="outlined"
          fullWidth
          label="Exercise Title"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Grid>

      <Grid item container spacing={3}>
        <Grid item xs={6}>
          <TextField
            type="number"
            variant="outlined"
            fullWidth
            label="Reps"
            value={reps}
            required
            onChange={(e) => {
              const newValue = parseFloat(e.target.value);
              setReps(newValue <= 0 ? "" : e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            type="number"
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            label="Load"
            value={load}
            required
            onChange={(e) => {
              const newValue = parseFloat(e.target.value);
              setLoad(newValue <= 0 ? "" : e.target.value);
            }}
          />
        </Grid>
      </Grid>

      <Grid item>
        <Button variant="contained" fullWidth type="submit">
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export default WorkoutForm;
