export interface IPlanList {
  name: string,
  price: number,
  description: string[],
  age: number
}

export interface IPlans {
    list: IPlanList[];
};

export interface IResumePlan {
    name: string;
    price: string;
};
  