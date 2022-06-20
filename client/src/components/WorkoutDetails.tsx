// MUI components
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export interface IWorkout {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const WorkoutDetails = ({ workout }: { workout: IWorkout }) => {
  return (
    <Card>
      <CardHeader title={workout.title} subheader={workout.createdAt} />
      <CardContent>
        <Typography>
          <strong>Reps:</strong> {workout.reps}
        </Typography>
        <Typography>
          <strong>Load (kg):</strong> {workout.load}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WorkoutDetails;
