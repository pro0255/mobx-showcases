type Props = {
  link: string;
};

export const Playground = ({ link }: Props) => {
  return <a href={link}>Playground link</a>;
};
