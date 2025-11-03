type DoctorDTO = {
  id: number;
  image: string;
  name: string;
  introduce: string;
  displaySpecialty: string;
  displayPosition: string;
  trainProcess: string;
  experience: string;
  strength: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

export type { DoctorDTO };
