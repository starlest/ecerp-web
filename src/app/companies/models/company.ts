export interface Company {
  id: string;
  name: string;
}

export function generateMockCompany(): Company {
  return {
    id: '1',
    name: 'Putra Jaya',
  };
}
