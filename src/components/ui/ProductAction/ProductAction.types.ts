export type ProdActionProps = {
  id: number;
  action: string;
};

export type DataProps = ProdActionProps[];

export type PreferenceActionProps = {
  productId: string;
};
