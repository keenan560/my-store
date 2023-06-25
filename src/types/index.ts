export type ButtonProps = {
  title: string;
  backgroundColor: string;
  color: string | undefined;
  width: number | undefined;
  borderColor: string | undefined;
  borderWidth: number | undefined;
  onPress: () => void;
};
