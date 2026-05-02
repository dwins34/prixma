'use client';

import React from 'react';
import { Stepper, Step } from '../components/ui/Stepper';

export default function StepperDemo() {
  const steps: Step[] = [
    { title: 'Personal Details', subheader: 'Enter your basic identity information.', status: 'completed' },
    { title: 'Professional Info', subheader: 'Your work and experience.', status: 'active' },
    { title: 'Payment Method', subheader: 'How you will pay.', status: 'default' },
    { title: 'Review', subheader: 'Check everything.', status: 'disabled' },
    { title: 'Finish', subheader: 'Almost there.', status: 'error' },
    { title: 'Feedback', subheader: 'Tell us more', status: 'default', isOptional: true },
  ];

  const simpleSteps: Step[] = [
    { title: 'Step 1', status: 'completed' },
    { title: 'Step 2', status: 'active' },
    { title: 'Step 3', status: 'default' },
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '40px', fontFamily: 'var(--font-display)' }}>Stepper Component Showcase</h1>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>Sizes (Horizontal)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>
            <p style={{ marginBottom: '10px', color: 'var(--text-secondary)' }}>Large</p>
            <Stepper steps={simpleSteps} size="lg" />
          </div>
          <div>
            <p style={{ marginBottom: '10px', color: 'var(--text-secondary)' }}>Medium</p>
            <Stepper steps={simpleSteps} size="md" />
          </div>
          <div>
            <p style={{ marginBottom: '10px', color: 'var(--text-secondary)' }}>Small</p>
            <Stepper steps={simpleSteps} size="sm" />
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>States and Details</h2>
        <Stepper steps={steps} size="md" />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>Vertical Navigation Tracker</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
          <div>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Large Vertical</p>
            <Stepper steps={steps} orientation="vertical" size="lg" />
          </div>
          <div>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Medium Vertical</p>
            <Stepper steps={steps} orientation="vertical" size="md" />
          </div>
          <div>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>Small Vertical (Dot variant)</p>
            <Stepper steps={steps} orientation="vertical" size="sm" variant="dot" />
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>Variants</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>
            <p style={{ marginBottom: '10px', color: 'var(--text-secondary)' }}>Number variant</p>
            <Stepper steps={simpleSteps} variant="number" />
          </div>
          <div>
            <p style={{ marginBottom: '10px', color: 'var(--text-secondary)' }}>Dot variant</p>
            <Stepper steps={simpleSteps} variant="dot" />
          </div>
        </div>
      </section>
    </div>
  );
}
