import type { Paper } from '@/types'

/**
 * Academic papers; can later be loaded from API/CMS or grouped by year/type.
 */
export const papers: Paper[] = [
  {
    id: '1',
    title: 'MonoSense: A Monolithic Design and Fabrication Method for Skin-Contact Interface of Interactive Devices with Embedded Pressure Sensing via Multi-material 3D Printing',
    authors: 'Song, X., Lu, H., Zhang, S., Huang, J., Tan, X.*, Feng, F.*, Zhang, H.*, & Li, Q.',
    venue: 'International Conference on Human-Engaged Computing (ICHEC 2025)',
    year: 2025,
    status: 'Accepted for Proceedings, Invited Oral Presentation, Honourable Mention Award',
    note: 'First Author',
    link: '/papers/1.pdf',
  },
  {
    id: '2',
    title: 'All Futures at Once: Supporting Speculative Design for Placemaking with Multi-Agent Social Simulation',
    authors: 'Li, J., Jiang, J., Tang, S., Yu, M., Song, X., Xue, C., Su, Y., Tan, X., & Shi, Y*.',
    venue: 'ACM Conference on Human Factors in Computing Systems (CHI 2026)',
    year: 2026,
    status: 'Accepted',
    note: 'Co-author, Contributed to system development & design, drafting, and user study',
    link: '/papers/2.pdf',
  },
  {
    id: '3',
    title: 'A Preliminary Study of Illusion-Driven Hand Rehabilitation Exoskeleton',
    authors: 'Zang, Y., Lu, G., Chen, Z., Han, Z., Ma, Z., Song, X., Xiao, C., Tan, X.*, & Qiu, S*.',
    venue: 'International Conference on Human-Engaged Computing (ICHEC 2025)',
    year: 2025,
    status: 'Accepted for Proceedings',
    note: 'Co-author, Contributed to experiment',
    link: '/papers/3.pdf',
  },
  {
    id: '4',
    title: 'A Sensorized Hand Orthosis With Built-in Contact Pressure Measurement Via Monolithic Multi-material 3D Printing',
    authors: 'Song, X., Tan, X.*, Feng, F., Zhang, H., & Li, Q.',
    venue: 'IEEE Robotics and Automation Letters (RA-L)',
    year: undefined,
    status: 'Under Review',
    note: 'First Author',
  },
  {
    id: '5',
    title: 'Deep Learning Based Screening and Regular Assessment of Adolescent Idiopathic Scoliosis Using Wearable IMU Sensors',
    authors: 'Tan, X., Lu, H., Li, B., Song, X., Yang, P., Li, Q.*, Luo, Y.*, Feng, F.*, Ma, Q.*, Zhang, S., Shan, Z., Li, B., Li, Z., & Jin, Q.',
    venue: 'European Spine Journal',
    year: undefined,
    status: 'Under Review',
    note: 'Co-author, Contributed to system prototyping & data analysis',
  },
  {
    id: '6',
    title: 'From Space to Place: Designing Human–AI Collaboration to Integrate Spatial and Social Perspectives in Placemaking',
    authors: 'Li, J., Jiang, J., Wang, Y., Song, X., Shu, X., & Shi, Y*.',
    venue: 'ACM Designing Interactive Systems Conference (DIS 2026)',
    year: 2026,
    status: 'Under Review',
    note: 'Co-author, contribution to writing and conceptual development',
  },
]
