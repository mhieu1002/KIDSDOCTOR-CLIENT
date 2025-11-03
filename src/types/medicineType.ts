type MedicineDTO = {
  id: number;
  name: string;
  image: string;
  composition: string;
  description: string;
  contraindications: string;
  indications: string;
  dosageForm: string;
  dosage: string;
  manufacturingCountry: string;
  packaging: string;
  groupId: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

export type { MedicineDTO };
