/**
 * 全局类型定义，便于后续接入 API、CMS 或复杂数据
 */

export interface Paper {
  id: string
  title: string
  authors: string
  venue?: string
  year?: number
  link?: string
  abstract?: string
  /** e.g. "Accepted for Proceedings", "Under Review" */
  status?: string
  /** e.g. "First Author", "Co-author, Contributed to..." */
  note?: string
}

export interface Project {
  id: string
  title: string
  description: string
  link?: string
  tags?: string[]
}

export interface ResearchExperience {
  id: string
  title: string
  period: string
  venue?: string
  collaboration?: string
  website?: string
  /** One-sentence summary for the project card on the list page */
  shortSummary: string
  /** Image path for the card, e.g. /projects/1.jpg */
  image?: string
  /** Extra images at the bottom of the detail page, e.g. ['/projects/12.png'] */
  gallery?: string[]
  overview: string
  contributions: string[]
  keyOutcomes: string[]
}
