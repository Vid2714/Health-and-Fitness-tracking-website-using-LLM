import React, { useState } from 'react';
import ScrollableExerciseList from './ScrollableExerciseList';
import ExerciseDetail from './ExerciseDetail';


const yogaExercises = [
    { 
      name: 'Downward Dog', 
      image: 'https://cdn.yogajournal.com/wp-content/uploads/2021/11/Downward-Facing-Dog-Pose_Andrew-Clark_2400x1350.jpeg', 
      gif: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG85YTdsdXh1Y2Izd3pjeGc1eGJkN3VqdmV3azA5ZXAxeTlhZHAyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U5hkjaoCFq3Nm/giphy.webp',
      instructions: [
        '1. Setup: Start on your hands and knees in a tabletop position, with your wrists aligned under your shoulders and knees under your hips. Spread your fingers wide and press firmly into the mat.',
        '2. Execution: Tuck your toes under and lift your hips towards the ceiling, straightening your legs and forming an inverted V shape with your body. Keep your head between your arms and gaze towards your feet.',
        '3. Tips: Engage your core, press your heels towards the floor (they don\'t need to touch), and keep your spine long. Hold the pose for several breaths, ensuring your weight is evenly distributed between your hands and feet.'
      ],
      type: 'yoga'
    },
    { 
      name: 'Warrior Pose', 
      image: 'https://cdn.yogajournal.com/wp-content/uploads/2021/10/Warrior-1-Pose_Andrew-Clark_2400x1350.jpeg', 
      gif: 'https://i.pinimg.com/originals/3d/8a/e3/3d8ae38156b2963b38e4690143eb964f.gif',
      instructions: [
        '1. Setup: Start in a standing position (Mountain Pose). Step one foot back about 3-4 feet, turning the back foot out at a 45-degree angle. Keep your front foot pointing straight ahead, and your feet should be hip-width apart.',
        '2. Execution: Bend your front knee over your ankle, ensuring the knee doesn\'t go past the toes. Raise your arms overhead, reaching towards the sky, and keep your hips squared forward.',
        '3. Tips: Engage your core, press evenly into both feet, and relax your shoulders away from your ears. Hold the pose for several breaths, then switch sides and repeat.'
      ],
      type: 'yoga'
    },
    { 
      name: 'Tree Pose', 
      image: 'https://cdn.prod.website-files.com/61384703bca2db472ca04cfa/65166404fa404f0e059fa402_HowToDoTreePose.jpg', 
      gif: 'https://i.pinimg.com/originals/bd/e1/aa/bde1aa43224edbc15fcaed511347e98b.gif',
      instructions: [
        '1. Setup: Start in Mountain Pose with feet together. Shift your weight onto one leg, keeping it strong and stable. Bend the opposite knee and place the sole of that foot on your inner thigh, calf, or ankle (avoiding the knee).',
        '2. Execution: Bring your hands together in front of your chest in a prayer position. Once balanced, you can extend your arms overhead with palms facing each other or keep them in prayer position.',
        '3. Tips: Engage your core, keep your standing leg strong, and focus your gaze on a fixed point to help maintain balance. Hold the pose for several breaths, then switch sides and repeat.'
      ],
      type: 'yoga'
    },
    { 
      name: 'Child\'s Pose', 
      image: 'https://www.verywellfit.com/thmb/bTIsn-2tDSnKiLoFtWTU8PbG5Ks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ChildsPose-5c5d94ce46e0fb00017dd0d9.jpg', 
      gif: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325373/child-s-pose-yoga-stretch-and-exercise-gif.gif',
      instructions: [
        '1. Setup: Start on your hands and knees in a tabletop position. Bring your big toes together and spread your knees wide apart.',
        '2. Execution: Sit back on your heels and lower your torso between your thighs. Extend your arms forward with palms facing down, or place them alongside your body with palms facing up.',
        '3. Tips: Relax your forehead on the mat, breathe deeply, and allow your body to relax fully into the pose. Hold for several breaths, focusing on releasing tension and stretching your back and hips.'
      ],
      type: 'yoga'
    },
    { 
      name: 'Cobra Pose', 
      image: 'https://cdn.yogajournal.com/wp-content/uploads/2022/06/Upward-Facing-Dog-Mod-1_Andrew-Clark-e1670972827524.jpg?width=730', 
      gif: 'https://cdn.jefit.com/assets/img/exercises/gifs/625.gif',
      instructions: [
        '1. Setup: Lie face down on your mat with your legs extended behind you and the tops of your feet pressing into the mat. Place your hands under your shoulders, elbows close to your body.',
        '2. Execution: Press into your hands and slowly lift your chest off the mat, keeping your elbows slightly bent and close to your sides. Lift only to the point where you feel a comfortable stretch in your back.',
        '3. Tips: Keep your shoulders relaxed and away from your ears, engage your core, and gaze slightly upward. Hold the pose for several breaths, then lower your chest back to the mat with control.'
      ],
      type: 'yoga'
    }
  ];
  

function Yoga() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="section yoga-section">
      <h2>Yoga</h2>
      <ScrollableExerciseList 
        exercises={yogaExercises} 
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

export default Yoga;
