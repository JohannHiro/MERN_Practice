import { useEffect, useState } from "react";

// MUI components
import { Box, Container, Grid } from "@mui/material";

// Custom components
import WorkoutDetails, { IWorkout } from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState<IWorkout[] | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const data: IWorkout[] = await response.json();

      if (response.ok) setWorkouts(data);
    };

    fetchWorkouts();
  }, []);

  return (
    <Container sx={{ marginTop: "50px" }}>
      <Grid container justifyContent="space-between">
        <Grid item xs={7} container direction="column" spacing={2}>
          {workouts &&
            workouts.map((workout) => (
              <Grid item key={workout._id}>
                <WorkoutDetails workout={workout} />
              </Grid>
            ))}
        </Grid>

        <Grid item xs={4}>
          <WorkoutForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
