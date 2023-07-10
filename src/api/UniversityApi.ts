import {UniversityType} from '../types';

class UniversityApi {
  async getUniversity(): Promise<UniversityType> {
    try {
      const result = await fetch(
        'http://universities.hipolabs.com/search?country=Russian%20Federation',
      );
      const parsed: UniversityType[] = await result.json();
      const randomInt = Math.floor(Math.random() * parsed.length);

      return parsed[randomInt];
    } catch (e) {
      throw new Error('Failed to fetch University list, Please Try letter');
    }
  }
}

export default new UniversityApi();
