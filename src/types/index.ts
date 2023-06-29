export type ButtonProps = {
  title: string;
  backgroundColor: string;
  color: string | undefined;
  width: number | undefined;
  borderColor: string | undefined;
  borderWidth: number | undefined;
  onPress: () => void;
};

export type CardProps = {
  title: string;
  body: string;
  img: string | undefined;
  buttonTitle: string | undefined;
  price: string | undefined;
  upc: number | undefined;
};
