type Props = {
  link: string;
};
export const GithubLink = ({ link }: Props) => {
  return (
    <div>
      <a href={link}>Here is code</a>
    </div>
  );
};
