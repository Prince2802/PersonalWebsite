export class Experience {
  public readonly languages: string[];
  public readonly startDate: string;
  public readonly endDate: string;
  public readonly company: string;
  public readonly position: string;
  public readonly description: string;
  public readonly imagePath?: string;
  public readonly website?: string;

  constructor(
    languages: string[],
    startDate: string,
    endDate: string,
    company: string,
    position: string,
    description: string,
    imagePath?: string,
    website?: string
  ) {
    this.languages = languages;
    this.startDate = startDate;
    this.endDate = endDate;
    this.company = company;
    this.position = position;
    this.description = description;
    this.imagePath = imagePath;
    this.website = website;
  }
}
