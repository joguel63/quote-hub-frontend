const SENIOR_AGE_THRESHOLD = 65
/**
 * Uility function to determine if the applicant is a senior based on their age.
 * @param age age of the applicant to determine if they are a senior or not
 * @returns boolean indicating if the applicant is a senior (true) or not (false)
 */
export const getIsSenior = (age: number) => age > SENIOR_AGE_THRESHOLD
