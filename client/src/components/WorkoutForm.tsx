import { FormEventHandler, useState } from "react";

// MUI components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Card from "@mui/material/Card";

const WorkoutForm = () => {
  const [title, setTitle] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [load, setLoad] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

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

    // Reset form value
    if (response.ok) {
      setTitle("");
      setReps("");
      setLoad("");
      setError(null);
    } else {
      setError(data.error);
    }
  };

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
            variant="outlined"
            fullWidth
            label="Reps"
            required
            value={reps}
            onChange={(e) => {
              const isValid =
                /^[1-9]\d*$/.test(e.target.value) || e.target.value === "";
              setReps(isValid ? e.target.value : reps);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            label="Load"
            required
            value={load}
            onChange={(e) => {
              const isValid =
                /^[1-9]\d*$/.test(e.target.value) || e.target.value === "";
              setLoad(isValid ? e.target.value : load);
            }}
          />
        </Grid>
      </Grid>

      <Grid item>
        <Button variant="contained" fullWidth type="submit">
          Create
        </Button>
      </Grid>

      {error && <Card>{error}</Card>}
    </Grid>
  );
};

export default WorkoutForm;
