type Props = {
  link: string;
};
export const GithubLink = ({ link }: Props) => {
  return <a href={link}>Here is code</a>;
};
