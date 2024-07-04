import React, { useState } from 'react';
import ScrollableExerciseList from './ScrollableExerciseList';
import ExerciseDetail from './ExerciseDetail';


const cardioExercises = [
    { 
      name: 'Swimming', 
      image: 'https://i0.wp.com/www.trainingbeta.com/wp-content/uploads/2014/08/Swimmer.jpg?fit=650%2C350&ssl=1', 
      gif: 'https://i.pinimg.com/originals/c2/10/bd/c210bd78723ef0de52aed300d6667d05.gif',
      instructions: [
        '1. Warm-Up: Swim easy laps for a few minutes to warm up muscles and increase heart rate.',
        '2. Cardio Workout: Swim continuously with a challenging stroke (e.g., freestyle) for 20-30 minutes at a moderate to vigorous pace.',
        '3. Cool Down: Swim easy laps to gradually lower heart rate and stretch gently to relax muscles.'
      ],
      type: 'cardio'
    },
    { 
      name: 'Cycling', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/20220424_Liege_Bastogne_Liege117_edited_by_PetarM.jpg/1200px-20220424_Liege_Bastogne_Liege117_edited_by_PetarM.jpg', 
      gif: 'https://cdn.dribbble.com/users/159027/screenshots/3847670/cycling-loop-dribbble.gif',
      instructions: [
        '1. Warm-Up: Cycle at a low intensity for a few minutes to warm up muscles and gradually increase heart rate.',
        '2. Cardio Workout: Cycle at a moderate to vigorous pace for 20-30 minutes, maintaining a steady, challenging intensity.',
        '3. Cool Down: Cycle at a low intensity to gradually lower heart rate and stretch gently to relax muscles.'
      ],
      type: 'cardio'
    },
    { 
      name: 'Jogging', 
      image: 'https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/8/2/pbugaip3j1toqq07xfyi/running', 
      gif: 'https://i.giphy.com/hTDbWGwrjWlt6yRSMB.webp',
      instructions: [
        '1. Warm-Up: Begin with a brisk walk or slow jog for about 5-10 minutes to warm up your muscles and increase your heart rate gradually.',
        '2. Cardio Workout: Jog at a steady pace that raises your heart rate, aiming for 20-30 minutes of continuous jogging. Maintain a pace that challenges you but allows you to sustain the effort.',
        '3. Cool Down: Finish with a few minutes of walking to gradually lower your heart rate. Stretch your leg muscles gently to improve flexibility and reduce muscle tension.'
      ],
      type: 'cardio'
    },
    { 
      name: 'Jump Rope', 
      image: 'https://runningmagazine.ca/wp-content/uploads/2019/09/skipping-copy-e1568127526898.jpg', 
      gif: 'https://burnfit.io/wp-content/uploads/2023/11/JUMP_ROPE.gif',
      instructions: [
        '1. Warm-Up: Start with a few minutes of light jumping or skipping to warm up your muscles and increase your heart rate gradually.',
        '2. Cardio Workout: Jump rope continuously for 15-30 minutes at a moderate to high intensity. Focus on maintaining a steady rhythm and incorporating different techniques like single jumps, double unders, or alternating feet to vary the intensity.',
        '3. Cool Down: Finish by jumping lightly or walking in place for a few minutes to gradually lower your heart rate. Stretch your calf muscles and legs to improve flexibility and prevent stiffness.'
      ],
      type: 'cardio'
    },
    { 
      name: 'HIIT', 
      image: 'https://media.istockphoto.com/id/1311041275/photo/muscles-loading-please-wait.jpg?s=612x612&w=0&k=20&c=BG57z3VIml2Gw51Ic2NU86JeusEXrosfoma9m8EWk50=', 
      gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Plyo-Jacks.gif',
      instructions: [
        '1. Warm-Up: Begin with 5-10 minutes of dynamic stretches or light cardio, such as jogging or jumping jacks, to warm up your muscles and prepare your body for exercise.',
        '2. HIIT Workout: Alternate between periods of high-intensity exercise and recovery or lower-intensity exercise. For example, perform 20-30 seconds of high-intensity exercise (e.g., sprinting, burpees, high knees) followed by 10-20 seconds of rest or low-intensity exercise (e.g., walking or slow jogging). Repeat this cycle for 15-20 minutes, adjusting intensity and rest periods based on your fitness level.',
        '3. Cool Down: Finish with 5-10 minutes of light aerobic activity (e.g., walking) to gradually lower your heart rate. Stretch major muscle groups, focusing on areas that were worked during the workout, to enhance flexibility and reduce muscle soreness.'
      ],
      type: 'cardio'
    }
  ];
  

function Cardio() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="section cardio-section">
      <h2>Cardio</h2>
      <ScrollableExerciseList 
        exercises={cardioExercises} 
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

export default Cardio;