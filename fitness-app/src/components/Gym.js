import React, { useState } from 'react';
import ScrollableExerciseList from './ScrollableExerciseList';
import ExerciseDetail from './ExerciseDetail';


const gymExercises = [
    { 
      name: 'Chest Press', 
      image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/07/Male_Chest_Press_1296x728-header-1296x728.jpg?w=1155&h=1528', 
      gif: 'https://i.pinimg.com/originals/bc/d2/05/bcd205cf9e64811981d715deebaa41da.gif',
      instructions: [
        '1. Setup: Lie on a flat bench with feet flat. Hold the barbell or dumbbells with hands wider than shoulder-width apart, palms facing away.',
        '2. Execution: Lift the weight off the rack (if using barbell). Lower it slowly towards your chest, keeping elbows slightly bent. Press it back up, exhaling as you push.',
        '3. Tips: Keep wrists straight, engage core for stability, and avoid locking elbows. Start with a weight allowing 8-12 reps with good form.'
      ],
      type: 'gym'
    },
    { 
      name: 'Leg Press', 
      image: 'https://ironbullstrength.com/cdn/shop/articles/leg_press_knee_pain.webp?v=1695829075', 
      gif: 'https://graduatefitness.com/wp-content/uploads/2021/01/IMG_2775.gif',
      instructions: [
        '1. Setup: Sit on the leg press machine with your back against the pad and feet shoulder-width apart on the footplate.',
        '2. Execution: Push the footplate away by extending your knees and hips until legs are almost fully extended. Lower the weight slowly back to starting position, keeping knees at a 90-degree angle.',
        '3. Tips: Keep your back flat against the pad, exhale as you push, and start with a weight allowing 10-15 reps with good form. Adjust weight as needed for your fitness level.'
      ],
      type: 'gym'
    },
    { 
      name: 'Squats', 
      image: 'https://www.mensjournal.com/.image/t_share/MTk2MTM2MzU5NzEwMjM3ODQx/main-squat.jpg', 
      gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif',
      instructions: [
        '1. Setup: Stand under the barbell in a squat rack, feet shoulder-width apart. Position the barbell across your upper back or lower on shoulder blades, gripping wider than shoulder-width.',
        '2. Execution: Lower by bending knees and hips together until thighs are parallel or slightly below. Keep knees aligned with toes and chest up.',
        '3. Tips: Maintain neutral spine, push through heels to rise, and start light to perfect form before adding weight.'
      ],
      type: 'gym'
    },
    { 
      name: 'Tricep Pushdowns', 
      image: 'https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_692258110_480x480.jpg?v=1633719089', 
      gif: 'https://fitnessprogramer.com/wp-content/uploads/2022/11/One-arm-triceps-pushdown.gif',
      instructions: [
        '1. Setup: Stand in front of a cable machine with a high pulley attachment. Grab the straight bar or rope attachment with an overhand grip, hands shoulder-width apart.',
        '2. Execution: Keep elbows close to your sides, extend your arms downward until they are fully extended. Hold for a moment, then slowly return to the starting position, bending at the elbows.',
        '3. Tips: Keep your upper arms stationary throughout the movement. Focus on squeezing your triceps at the bottom of the movement. Start with a weight that allows you to perform 10-15 reps with proper form.'
      ],
      type: 'gym'
    },
    { 
      name: 'Deadlift', 
      image: 'https://blogscdn.thehut.net/wp-content/uploads/sites/495/2018/10/25171220/Blog-Deadlifting-Male_1800x672_1200x672_acf_cropped.jpg',
      gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',
      instructions: [
        '1. Setup: Stand with feet hip-width apart, barbell over mid-foot. Bend at hips and knees, grip bar with hands shoulder-width apart.',
        '2. Execution: Keep back straight, chest up. Lift bar by extending hips and knees together, standing up straight. Lower bar back to ground with controlled motion.',
        '3. Tips: Keep bar close to body, engage core throughout. Start with lighter weights to master form before increasing load. Perform 6-10 reps with proper technique.'
      ],
      type: 'gym'
    }
  ];
  

function Gym() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="section gym-section">
      <h2>Gym</h2>
      <ScrollableExerciseList 
        exercises={gymExercises} 
        onSelectExercise={setSelectedExercise} 
      />
      {selectedExercise && (
        <ExerciseDetail 
          exercise={selectedExercise} 
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
}

export default Gym;