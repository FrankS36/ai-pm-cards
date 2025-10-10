import {
  LogoLayered,
  LogoNeuralNet,
  LogoDecisionTree,
  LogoFlowchart,
  LogoBrain,
  LogoCompass,
  LogoPulse,
  LogoRocket,
  LogoShield,
  LogoGraph,
  LogoGears,
  LogoTarget,
  LogoCircuit,
  LogoLightbulb,
  LogoCards,
  LogoHub,
  LogoPeak,
  LogoKnight,
  LogoHexagon
} from '../components/logos';

function LogoComparison() {
  const logos = [
    {
      name: 'Layered Cards',
      component: LogoLayered,
      description: 'Stacked cards with AI circuit pattern - represents layered frameworks',
      animated: false
    },
    {
      name: 'Neural Network',
      component: LogoNeuralNet,
      description: 'Connected nodes showing AI/ML neural network structure',
      animated: false
    },
    {
      name: 'Decision Tree',
      component: LogoDecisionTree,
      description: 'Branching tree structure - represents decision-making frameworks',
      animated: false
    },
    {
      name: 'Flowchart',
      component: LogoFlowchart,
      description: 'Process flow diagram - represents systematic PM processes',
      animated: false
    },
    {
      name: 'Brain',
      component: LogoBrain,
      description: 'AI brain with neural connections - represents intelligent thinking',
      animated: false
    },
    {
      name: 'Compass',
      component: LogoCompass,
      description: 'Rotating compass needle - navigation & strategic direction',
      animated: true
    },
    {
      name: 'Pulse',
      component: LogoPulse,
      description: 'Pulsing energy waves - dynamic AI systems & real-time data',
      animated: true
    },
    {
      name: 'Rocket',
      component: LogoRocket,
      description: 'Launching rocket - product launches & rapid execution',
      animated: true
    },
    {
      name: 'Shield',
      component: LogoShield,
      description: 'Protective shield with checkmark - AI risk management & safety',
      animated: false
    },
    {
      name: 'Graph',
      component: LogoGraph,
      description: 'Growth chart with animated data points - metrics & KPIs',
      animated: true
    },
    {
      name: 'Gears',
      component: LogoGears,
      description: 'Rotating gears - systematic processes & execution',
      animated: true
    },
    {
      name: 'Target',
      component: LogoTarget,
      description: 'Bullseye target - focused strategy & goal achievement',
      animated: true
    },
    {
      name: 'Circuit',
      component: LogoCircuit,
      description: 'Circuit board with pulsing nodes - AI/ML infrastructure',
      animated: true
    },
    {
      name: 'Lightbulb',
      component: LogoLightbulb,
      description: 'Glowing lightbulb - innovation & breakthrough ideas',
      animated: true
    },
    {
      name: 'Cards',
      component: LogoCards,
      description: 'Stack of index cards - literal representation of card-based learning',
      animated: false
    },
    {
      name: 'Hub',
      component: LogoHub,
      description: 'Central network hub - connected frameworks & knowledge center',
      animated: false
    },
    {
      name: 'Peak',
      component: LogoPeak,
      description: 'Mountain summit with flag - achieving goals & reaching milestones',
      animated: false
    },
    {
      name: 'Knight',
      component: LogoKnight,
      description: 'Chess knight - strategic thinking & tactical PM moves',
      animated: false
    },
    {
      name: 'Hexagon',
      component: LogoHexagon,
      description: 'Hexagonal pattern - structured frameworks & modular thinking',
      animated: false
    }
  ];

  return (
    <div className="min-h-screen pb-32 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mt-20 mb-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Logo Comparison
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            19 logo concepts for AI PM Cards • 8 animated • 11 static
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {logos.map(({ name, component: LogoComponent, description, animated }) => (
            <div
              key={name}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center hover:border-gray-900 dark:hover:border-white transition-all"
            >
              <div className="mb-6 flex justify-center">
                {/* Large version */}
                <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg relative">
                  {animated && (
                    <div className="absolute top-2 right-2 bg-gray-900 dark:bg-white text-white dark:text-black px-2 py-1 rounded text-xs font-bold">
                      ANIMATED
                    </div>
                  )}
                  <div className="scale-[2.5]">
                    <LogoComponent />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {name}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                {description}
              </p>

              {/* Show at actual nav bar size */}
              <div className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg">
                <LogoComponent />
                <span className="text-base font-bold text-gray-900 dark:text-white">
                  AI PM Cards
                </span>
              </div>

              <div className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                Preview at navbar size
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Implementation
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            To change the logo, update the import in <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">src/components/Navigation.jsx</code>:
          </p>
          <pre className="bg-gray-900 dark:bg-black text-gray-100 dark:text-white p-4 rounded-lg overflow-x-auto text-sm">
{`// Change this import in Navigation.jsx:
import { LogoNeuralNet as Logo } from './logos';

// To any of these 19 options:
import { LogoLayered as Logo } from './logos';
import { LogoNeuralNet as Logo } from './logos';      // ⭐ cleaned up
import { LogoDecisionTree as Logo } from './logos';   // ⭐ cleaned up
import { LogoFlowchart as Logo } from './logos';
import { LogoBrain as Logo } from './logos';
import { LogoCompass as Logo } from './logos';        // animated
import { LogoPulse as Logo } from './logos';          // animated
import { LogoRocket as Logo } from './logos';         // animated
import { LogoShield as Logo } from './logos';
import { LogoGraph as Logo } from './logos';          // animated
import { LogoGears as Logo } from './logos';          // animated ⭐
import { LogoTarget as Logo } from './logos';         // animated
import { LogoCircuit as Logo } from './logos';        // animated
import { LogoLightbulb as Logo } from './logos';      // animated
import { LogoCards as Logo } from './logos';          // ⭐ new
import { LogoHub as Logo } from './logos';            // ⭐ new
import { LogoPeak as Logo } from './logos';           // ⭐ new
import { LogoKnight as Logo } from './logos';         // ⭐ new
import { LogoHexagon as Logo } from './logos';        // ⭐ new`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default LogoComparison;
