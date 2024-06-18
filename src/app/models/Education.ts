export class Education {
  public readonly languages?: string[];
  public readonly startDate: string;
  public readonly endDate: string;
  public readonly institution: string;
  public readonly studyType: string;
  public readonly description: string;
  public readonly imagePath?: string;
  public readonly website?: string;
  constructor(
    startDate: string,
    endDate: string,
    institution: string,
    studyType: string,
    description: string,
    imagePath?: string,
    website?: string,
    languages?: string[]
  ) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.institution = institution;
    this.studyType = studyType;
    this.description = description;
    this.imagePath = imagePath;
    this.website = website;
    this.languages = languages;
  }
}

