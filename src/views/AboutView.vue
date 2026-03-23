<script setup lang="ts">
</script>

<template>
  <div class="view about-view">
    <div class="about-intro">
      <div class="about-photo-wrap">
        <img src="/photo.png" alt="Xinyuan Song" class="about-photo" />
      </div>
      <div>
        <h1>About</h1>
        <p class="intro">I am Xinyuan. Below is an overview of my education and current role.</p>
      </div>
    </div>

    <section class="section">
      <h2>Education</h2>
      <div class="edu-item">
        <div class="edu-head">
          <strong>Shanghai Jiao Tong University</strong>
          <span class="edu-meta">Sept 2023 – Jun 2026 (Expected) · Shanghai, China</span>
        </div>
        <p class="edu-degree">Master of Mechanical Engineering (International Industrial Design Engineering)</p>
        <p class="edu-gpa">GPA: 3.8/4.0</p>
        <ul class="edu-details">
          <li>Teaching Assistant (Outstanding TA), Art Engineering Fundamentals</li>
          <li>Key Courses: Intelligent Design System & Management, Web Product Design, Augmented Intelligence Design</li>
        </ul>
      </div>
      <div class="edu-item">
        <div class="edu-head">
          <strong>Harbin Institute of Technology</strong>
          <span class="edu-meta">Aug 2019 – Jun 2023 · Harbin, China</span>
        </div>
        <p class="edu-degree">B.Eng. in Industrial Design, Minor in Digital Media Creative Design</p>
        <p class="edu-gpa">GPA: 89.8/100 (Top 5%, Ranked 1/20)</p>
        <ul class="edu-details">
          <li>Key Courses: Design Innovation: Product Opportunity Analysis, UX Research Methods</li>
          <li>AI Integration: Artificial Intelligence, Computer Vision</li>
          <li>Engineering: Mechanical and Electrical Engineering</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2>Skills</h2>
      <ul class="skills-list">
        <li><strong>Prototyping & Hardware Development:</strong> 3D Printing, Rapid Prototyping (Arduino, ESP32), PCB Design</li>
        <li><strong>Coding & Data Analysis:</strong> Python, MATLAB</li>
        <li><strong>CAD:</strong> Creo, AutoCAD, KeyShot (Rendering)</li>
        <li><strong>Engineering Simulation & Modeling:</strong> SolidWorks, COMSOL</li>
        <li><strong>Design & Frontend:</strong> Figma, HTML/CSS/JS, Vue3</li>
      </ul>
    </section>

    <section class="section">
      <h2>Research Interests</h2>
      <ul class="interests-list">
        <li>Human–Computer Interaction</li>
        <li>Body-Centered Sensing</li>
        <li>Embodied Interaction</li>
        <li>Context-Aware Interactive Systems</li>
        <li>Wearable and XR Interfaces</li>
        <li>Intelligent Prototyping</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.about-intro {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-xl);
  align-items: start;
  margin-bottom: var(--space-2xl);
}
@media (max-width: 480px) {
  .about-intro { grid-template-columns: 1fr; }
}
.about-photo-wrap {
  padding: 4px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
}
.about-photo {
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
.about-intro .intro { margin-bottom: 0; color: var(--color-text-muted); font-size: 0.9375rem; }
.intro { margin-bottom: var(--space-lg); }
.section {
  padding: var(--space-xl) 0;
  border-bottom: 1px solid var(--color-border-light);
}
.section:last-of-type { border-bottom: none; }
.section h2 { margin-bottom: var(--space-lg); }

.interests-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.interests-list li {
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-border-light);
  font-size: 0.9375rem;
  line-height: 1.5;
}
.interests-list li:last-child { border-bottom: none; }

.edu-item {
  padding-bottom: var(--space-xl);
  margin-bottom: var(--space-xl);
  border-bottom: 1px solid var(--color-border-light);
}
.edu-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.edu-head { margin-bottom: var(--space-xs); }
.edu-head strong { font-size: 1rem; font-weight: 600; }
.edu-meta {
  display: block;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-top: var(--space-xs);
}
.edu-degree { margin: var(--space-xs) 0; font-size: 0.9375rem; }
.edu-gpa { margin: 0 0 var(--space-sm); font-size: 0.875rem; color: var(--color-text-muted); }
.edu-details {
  margin: var(--space-sm) 0 0;
  padding-left: 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.55;
}
.edu-details li { margin-bottom: var(--space-xs); }

.skills-list { list-style: none; padding: 0; margin: 0; }
.skills-list li {
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-border-light);
  font-size: 0.9375rem;
  line-height: 1.5;
}
.skills-list li:last-child { border-bottom: none; }
.skills-list strong { display: inline-block; min-width: 11em; color: var(--color-text); }
</style>
